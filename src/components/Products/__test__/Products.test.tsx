import Products from '../Products'

import { RenderResult, render } from '@testing-library/react'

describe('Filter tests', () => {
	let component: RenderResult

	beforeEach(() => {
		component = render(<Products />)
	})

	it('should match snapshot on initial render', () => {
		expect(component).toMatchSnapshot()
	})
})
