import Main from '../Main'

import { RenderResult } from '@testing-library/react'

import { renderWithProviders } from '../../../utils/test-utils'
import { BrowserRouter } from 'react-router-dom'

describe('Main tests', () => {
	let component: RenderResult
	beforeEach(() => {
		component = renderWithProviders(
			<BrowserRouter>
				<Main />
			</BrowserRouter>
		)
	})

	it('should match snapshot on initial render', () => {
		expect(component).toMatchSnapshot()
	})

	// it('should trigger fetch arrow button', async () => {

	// })
})
