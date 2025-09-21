import { styled } from "styled-components";


export const Container = styled.div`

	background: ${({ theme, isNew }) => isNew ? "none" : theme.COLORS.GRAY_500};
	color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_500 : theme.COLORS.WHITE_100};

	border-style: ${({ isNew }) => isNew ? "dashed" : "none"};
	border-width: ${({ isNew }) => isNew ? "0.2rem" : 0};
	border-color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_500 : "transparent"};

	height: 100%;
	min-height: 3.2rem;
	width: fit-content;
	padding: 0 1.2rem 0 1.4rem;
	border-radius: 0.6rem;

	display: flex;
	align-items: center;

	font-family: "Roboto", sans-serif;
	font-size: 1.6rem;
	font-weight: 400;
	line-height: 100%;

	white-space: nowrap;
	cursor: ${({ isNew }) => isNew ? "auto" : "default"};

	&:hover,
	&:focus-within {
		background: ${({ isNew, theme }) => isNew ? theme.COLORS.BLUE_DARK : ""};
	}

	> button {
		background: none;
		margin-left: 0.6rem;
		margin-top: 0.1rem;
		
		display: flex;
		align-items: center;
		border-radius: 50%;
		
		border: none;
		outline: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}

	.btn-add {
		color: ${({ theme }) => theme.COLORS.GRAY_500};

		&:hover {
			color: ${({ theme }) => theme.COLORS.GREEN};
			transform: scale(1.2);
		}
	}

	.btn-delete {
		color: ${({ theme }) => theme.COLORS.WHITE_100};

		&:hover {
			color: ${({ theme }) => theme.COLORS.RED_MID};
			transform: scale(1.2);
		}
	}

	> input {
		background: none;
		border: none;
		border-radius: 0;

		color: ${({ theme }) => theme.COLORS.WHITE_100};
		font-family: "Roboto", sans-serif;
		font-size: 1.6rem;
		font-weight: 400;
		line-height: 100%;

		height: 100%;
		width: 7.5rem;

		display: flex;
		align-items: center;
		cursor: ${({ isNew }) => isNew ? "auto" : "default"};

		&::placeholder {
			color: ${({ theme }) => theme.COLORS.GRAY_500};
		}
	}
`;
