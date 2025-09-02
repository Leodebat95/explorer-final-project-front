import { styled } from "styled-components";


export const Container = styled.div`

	header {
		background: ${({ theme }) => theme.COLORS.BLACK_700};

		width: 100%;
		height: 11.4rem;
		padding: 5.6rem 0 2.4rem;

		display: flex;
		align-items: center;
		justify-content: space-around;

		@media (width<=425px) {
			justify-content: space-evenly;
		}

		button {
			appearance: none;
			background: none;
			border: 0;

			margin-top: 0.6rem;
			width: fit-content;

			cursor: pointer;
			transition: color 0.2s ease-in-out;

			&:hover {
				color: ${({ theme }) => theme.COLORS.BLUE_SKY};
			}

			> svg {
				transform: scale(2.1);
			}
		}

		.logo {
			gap: 0.8rem;

			img {
				width: 2.5rem;
				height: 2.5rem;
			}

			h1 {
				font-size: 2.2rem;
			}
		}

		#header-receipt-container {
			position: relative;
			margin-top: 0.9rem;
			cursor: default;

			.red-ball {
				position: absolute;
				z-index: 1;
				bottom: 1.4rem;
				left: 1.1rem;

				background: ${({ theme }) => theme.COLORS.RED_DARK};
				width: 2rem;
				height: 2rem;
				border-radius: 50%;

				display: ${({ styleReceipt }) => styleReceipt == 0 ? "none" : "flex"};
				justify-content: center;
				align-items: center;
				font-size: ${({ styleReceipt }) => styleReceipt <= 9 ? "1.4rem" : "1.1rem"};
			}

			#svg-header-receipt {
				transform: scale(2.1);
			}
		}
	}
`;
