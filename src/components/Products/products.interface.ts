import { IProduct } from '../Product/product.interface'

export interface IProducts {
	data: IProduct[]
	page: number
	per_page: number
	total: number
	total_pages: number
}
