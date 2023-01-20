import { FC } from 'react'

import { FilterContainer, FilterInput } from './styled'

const Filter: FC<{
	setFilterId: (id: string) => void
	filterId: string
}> = ({ setFilterId, filterId }) => {
	return (
		<FilterContainer>
			<FilterInput
				data-testid="filter"
				onChange={(e) => {
					if (e.target.value === '0') {
						e.target.value = ''
					}
					setFilterId(e.target.value)
				}}
				placeholder="Search by id"
				type="number"
				value={filterId}
			/>
		</FilterContainer>
	)
}

export default Filter
