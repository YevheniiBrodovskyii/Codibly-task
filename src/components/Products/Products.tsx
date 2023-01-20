import { FC } from 'react'
import { IProduct } from '../Product/product.interface'
import { useAppSelector } from '../../hook'

import Product from '../Product/Product'
import { ProductsContainer } from './styled'

const Products: FC = () => {
	const productsData = useAppSelector((state) => state.products.list.data)

	return (
		<ProductsContainer>
			{productsData.map((item: IProduct) => (
				<Product product={item} key={item.id} />
			))}
		</ProductsContainer>
	)
}

export default Products
