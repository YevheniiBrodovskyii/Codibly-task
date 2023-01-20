import React, { FC, useEffect, useState } from 'react'
import { IProduct } from '../Product/product.interface'

import CloseIcon from '@mui/icons-material/Close'

import {
	ModalContainer,
	ModalIcon,
	ModalWrapper,
	ModalDescription,
	ModalName,
	ModalYear,
	ModalId,
	ModalColor,
	ModalOverlay,
	ModalPantone,
} from './styled'

const ProductModal: FC<{
	product: IProduct
	modal: boolean
	setModal: React.Dispatch<React.SetStateAction<boolean>>
}> = ({
	product: { id, name, year, color, pantone_value },
	modal,
	setModal,
}) => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		if (modal == true) {
			setMounted(true)
		}
	}, [modal])

	return (
		<>
			<ModalOverlay mounted={mounted} onClick={() => setModal(false)} />
			<ModalContainer mounted={mounted}>
				<ModalIcon onClick={() => setModal(false)}>
					<CloseIcon />
				</ModalIcon>
				<ModalWrapper>
					<ModalDescription>
						<ModalName color={color}>{name}</ModalName>
						<ModalYear>{year}</ModalYear>
						<ModalId>Product id: {id}</ModalId>
					</ModalDescription>
					<ModalColor color={color} />
				</ModalWrapper>
				<ModalPantone>{pantone_value}</ModalPantone>
			</ModalContainer>
		</>
	)
}

export default ProductModal
