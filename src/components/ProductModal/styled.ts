import styled from 'styled-components'

export const ModalContainer = styled.div<{ mounted: boolean }>`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background-color: black;
	visibility: ${({ mounted }) => (mounted ? 'visible' : 'hidden')};
	opacity: ${({ mounted }) => (mounted ? '1' : '0')};
	width: calc(40% - 40px);
	height: calc(500px - 20px);
	padding: 10px 20px;
	top: 20%;
	left: 30%;
	border-radius: 10px;
	transition: 0.3s all;
	z-index: 9999;
`
export const ModalIcon = styled.div`
	position: absolute;
	top: 10px;
	left: 10px;
	width: 24px;
	height: 24px;
	color: red;
	cursor: pointer;
`

export const ModalWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

export const ModalDescription = styled.div`
	width: 55%;
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const ModalOverlay = styled.div<{ mounted: boolean }>`
	position: fixed;
	visibility: ${({ mounted }) => (mounted ? 'visible' : 'hidden')};
	opacity: ${({ mounted }) => (mounted ? '0.4' : '0')};
	background-color: black;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transition: 0.3s all;
	z-index: 8899;
`

export const ModalName = styled.h1`
	color: ${({ color }) => (color ? color : 'white')};
	text-decoration: underline;
	font-size: 60px;
	font-weight: 600;
	margin: 0;
`
export const ModalYear = styled.h2`
	color: white;
	font-size: 40 px;
	font-weight: 300;
	margin: 0;
`

export const ModalId = styled.h3`
	width: 300px;
	color: white;
	border-radius: 10px;
	padding: 5px;
	margin: 0;
	font-size: 35px;
	font-weight: 200;
`

export const ModalColor = styled.div`
	width: 40%;
	height: 100%;
	background-color: ${({ color }) => (color ? color : 'white')};
`
export const ModalPantone = styled.p`
	text-align: right;
	color: white;
	font-size: 20px;
	font-weight: 300;
	margin: 0;
`
