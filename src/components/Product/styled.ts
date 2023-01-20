import styled from 'styled-components'

export const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 280px;
	height: 280px;
	border-radius: 10px;
	background-color: ${({ color }) => (color ? color : 'black')};
	margin: 0 auto;
	padding: 10px;
	transition: 0.3s all;
	cursor: pointer;
	&:hover {
		transform: scale(1.1);
	}
`

export const ProductId = styled.h3`
	width: 120px;
	text-align: center;
	color: white;
	border-radius: 10px;
	padding: 5px;
	margin: 0;
	font-size: 25px;
	font-weight: 200;
	background-color: rgba(0, 0, 0, 0.5);
`

export const ProductName = styled.h1`
	font-size: 45px;
	font-weight: 600;
	text-align: center;
	margin: 0;
`

export const ProductYear = styled.h2`
	font-size: 22px;
	font-weight: 300;
	margin: 0;
	text-align: right;
`
export const ProductSpan = styled.span<{ mounted: boolean }>`
	margin: 0 auto;
	opacity: ${({ mounted }) => (mounted ? '1' : '0')};
	transition: 0.3s all;
`
