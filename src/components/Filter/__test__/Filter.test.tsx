import Filter from '../Filter'

import { RenderResult, render } from '@testing-library/react'

describe('Filter tests', () => {
	let component: RenderResult
	const mockfetch = jest.fn()

	beforeEach(() => {
		component = render(<Filter setFilterId={mockfetch} filterId={'1'} />)
	})

	it('should match snapshot on initial render', () => {
		expect(component).toMatchSnapshot()
	})

	// it('should trigger onChange event', async () => {

	// 	fireEvent.change(input, {
	// 		target: { value: '0' },
	// 	})
	// 	expect(input.value).toBe('')
	// })
})
