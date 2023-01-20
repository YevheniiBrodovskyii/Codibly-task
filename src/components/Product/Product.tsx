import { useState, FC } from 'react'
import { IProduct } from './product.interface'

import ProductModal from '../ProductModal/ProductModal'

import {
	ProductContainer,
	ProductId,
	ProductName,
	ProductYear,
	ProductSpan,
} from './styled'

const Product: FC<{ product: IProduct }> = ({ product }) => {
	const [mounted, setMounted] = useState<boolean>(false)
	const [modal, setModal] = useState<boolean>(false)

	return (
		<>
			<ProductContainer
				color={product.color}
				onMouseEnter={() => setMounted(true)}
				onMouseLeave={() => setMounted(false)}
				onClick={() => setModal(true)}
			>
				<ProductId>Item id: {product.id}</ProductId>
				<ProductName>{product.name}</ProductName>
				<ProductSpan mounted={mounted}>Click for more...</ProductSpan>
				<ProductYear>{product.year}</ProductYear>
			</ProductContainer>
			{modal ? (
				<ProductModal product={product} modal={modal} setModal={setModal} />
			) : null}
		</>
	)
}

export default Product
