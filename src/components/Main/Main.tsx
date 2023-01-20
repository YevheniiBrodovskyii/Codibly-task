import { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useAppDispatch } from '../../hook'
import { getProducts } from '../../store/ProductsSlice'

import Filter from '../Filter/Filter'
import Pagination from '../Pagination/Pagination'
import Products from '../Products/Products'

import { ErrorMessage } from './styled'

const Main: FC = () => {
	const dispatch = useAppDispatch()

	const [errorId, setErrorId] = useState<string>('')
	const [errorMessage, setErrorMessage] = useState<string>('')

	const [searchParams, setSearchParams] = useSearchParams()

	const page = searchParams.get('page') || '1'
	const filterId = searchParams.get('id') || ''

	const setPage = (page: string) =>
		setSearchParams(
			(params) => {
				params.set('page', page)
				return params
			},
			{ replace: true }
		)

	const setFilterId = (id: string) =>
		setSearchParams(
			(params) => {
				params.set('id', id)
				return params
			},
			{ replace: true }
		)

	useEffect(() => {
		async function fetchProducts(id?: string, page = '1') {
			const itemsPerPage = 5
			const url = id
				? `https://reqres.in/api/products/${id}`
				: `https://reqres.in/api/products?per_page=${itemsPerPage}&page=${page}`

			const requestOptions = {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			}

			try {
				const response = await fetch(url, requestOptions)
				const data = await response.json()

				if (response.ok) {
					setErrorId('')
					setErrorMessage('')

					if (id) {
						dispatch(
							getProducts({
								page: 1,
								per_page: 1,
								total: 1,
								total_pages: 1,
								data: [data.data],
							})
						)
						setSearchParams({ page, id }, { replace: true })
					} else {
						dispatch(getProducts(data))
						setSearchParams({ page }, { replace: true })
					}
				} else {
					const error = data?.message || response.status
					setErrorId(error.toString())
					return Promise.reject(error)
				}
			} catch (error: any) {
				setErrorId(error.toString())
				console.error('There was an error!', error)
			}
		}

		fetchProducts(filterId, page)
	}, [filterId, page])
	return (
		<div>
			<Filter setFilterId={setFilterId} filterId={filterId} />
			{errorId ? (
				<ErrorMessage>
					{errorId === '404'
						? 'Product not found'
						: `${errorId}: ${errorMessage}`}
				</ErrorMessage>
			) : (
				<Products />
			)}
			<Pagination setPage={setPage} />
		</div>
	)
}

export default Main
