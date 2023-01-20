import styled from 'styled-components'

export const ProductsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(300px, 1fr));
	column-gap: 1rem;
	row-gap: 3rem;
	min-height: 700px;
	margin: 50px 0 20px 0;
`
