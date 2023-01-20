import Product from '../Product'

import { IProduct } from '../product.interface'

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
	beforeEach(() => {
		component = renderWithProviders(<Product product={props} />)
	})

	it('should match snapshot on initial render', () => {
		expect(component).toMatchSnapshot()
	})

	// it('should trigger fetch arrow button', async () => {

	// })
})
