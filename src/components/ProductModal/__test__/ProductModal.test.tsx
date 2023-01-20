import ProductModal from '../ProductModal'
import { IProduct } from '../../Product/product.interface'
import { RenderResult } from '@testing-library/react'
import { renderWithProviders } from '../../../utils/test-utils'

describe('Main tests', () => {
	let component: RenderResult
	const props: IProduct = {
		id: 1,
		name: 'Test',
		year: 2023,
		color: '#000000',
		pantone_value: '20-2023',
	}
	const setModal = jest.fn()
	beforeEach(() => {
		component = renderWithProviders(
			<ProductModal product={props} modal={true} setModal={setModal} />
		)
	})

	it('should match snapshot on initial render', () => {
		expect(component).toMatchSnapshot()
	})

	// it('should trigger fetch arrow button', async () => {

	// })
})
