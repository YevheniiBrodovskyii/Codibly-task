import styled from 'styled-components'

export const PaginationTitle = styled.p`
	margin: 0;
	text-align: center;
	font-size: 25px;
`

export const PaginationContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 86px;
	margin: 0 auto;
	background-color: black;
	border-radius: 10px;
	padding: 10px;
`

export const PaginationBtn = styled.button`
	background-color: unset;
	border: none;
	color: ${({ disabled }) => (disabled ? 'unset' : 'white')};
	cursor: pointer;
	transition: 0.3s all;
	&:hover {
		transform: scale(1.3);
	}
`
