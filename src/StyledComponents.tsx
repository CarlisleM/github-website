import styled from 'styled-components'

export const Project = styled.div`
	flex: 0 30%;
	margin: 20px 2%;
	height: 785px;
	border: 2px solid black;
	border-radius: 10px;

	@media only screen and (max-width: 768px) {
		flex: 0 90%;
		margin: 10px 2%;
	}
`

export const Divider = styled.hr`
	width: 100%;
	border-top: 2px solid lightgrey; //  Maybe a better colour choice here
`
