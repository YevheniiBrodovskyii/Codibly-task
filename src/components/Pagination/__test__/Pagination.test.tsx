import Pagination from '../Pagination'

import {
	screen,
	fireEvent,
	waitFor,
	RenderResult,
} from '@testing-library/react'

import { renderWithProviders } from '../../../utils/test-utils'

describe('Pagination tests', () => {
	let component: RenderResult
	const mockfetch = jest.fn()

	beforeEach(() => {
		component = renderWithProviders(<Pagination setPage={mockfetch} />)
	})

	it('should match snapshot on initial render', () => {
		expect(component).toMatchSnapshot()
	})

	it('should trigger fetch arrow button', async () => {
		console.log(await screen.getByTestId('pagination-right-arrow'))
		console.log('Clicking')
		fireEvent.click(screen.getByTestId('ArrowForwardIosIcon'))
		await waitFor(() => expect(mockfetch).toHaveBeenCalledTimes(1))
		expect(mockfetch).toBeCalledWith(1)
	})
})
