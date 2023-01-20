import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProducts } from '../components/Products/products.interface'

type ProductsState = {
	list: IProducts
}

const initialState: ProductsState = {
	list: {
		data: [{ id: 0, name: '', year: 0, color: '', pantone_value: '' }],
		page: 0,
		per_page: 0,
		total: 0,
		total_pages: 0,
	},
}

const ProductsSlice = createSlice({
	name: 'getProducts',
	initialState,
	reducers: {
		getProducts(state, action: PayloadAction<IProducts>) {
			return { list: action.payload }
		},
	},
})

export const { getProducts } = ProductsSlice.actions

export default ProductsSlice.reducer
