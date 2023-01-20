import { FC } from 'react'
import { useAppSelector } from '../../hook'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { PaginationTitle, PaginationBtn, PaginationContainer } from './styled'

const Pagination: FC<{
	setPage: (page: string) => void
}> = ({ setPage }) => {
	let pageNumber = useAppSelector((state) => state.products.list.page)
	const totalPages = useAppSelector((state) => state.products.list.total_pages)

	return (
		<>
			<PaginationTitle>Page {pageNumber}</PaginationTitle>
			<PaginationContainer>
				<PaginationBtn
					onClick={() => {
						setPage((pageNumber -= 1).toString())
					}}
					disabled={pageNumber <= 1}
				>
					<ArrowBackIosIcon fontSize="large" style={{ float: 'left' }} />
				</PaginationBtn>

				<PaginationBtn
					onClick={() => {
						setPage((pageNumber += 1).toString())
					}}
					disabled={pageNumber >= totalPages}
					data-testid="pagination-right-arrow"
				>
					<ArrowForwardIosIcon fontSize="large" style={{ float: 'right' }} />
				</PaginationBtn>
			</PaginationContainer>
		</>
	)
}

export default Pagination
