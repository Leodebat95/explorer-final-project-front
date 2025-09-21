import { styled } from "styled-components";


export const Container = styled.div`

	> header {
		background: ${({ theme }) => theme.COLORS.BLACK_700};

		width: 100%;
		height: 11.4rem;
		padding: 5.6rem 0 2.4rem;

		display: flex;
		align-items: center;

		justify-content: ${({ isAdmin }) => isAdmin ? "center" : "space-around"};
		gap: ${({ isAdmin }) => isAdmin ? "20rem" : "0"};

		@media (width<=660px) {
			gap: ${({ isAdmin }) => isAdmin ? "17rem" : "0"};
		}

		@media (width<=620px) {
			gap: ${({ isAdmin }) => isAdmin ? "14rem" : "0"};
		}

		@media (width<=570px) {
			gap: ${({ isAdmin }) => isAdmin ? "12rem" : "0"};
		}

		@media (width<=530px) {
			gap: ${({ isAdmin }) => isAdmin ? "10rem" : "0"};
		}

		@media (width<=480px) {
			gap: ${({ isAdmin }) => isAdmin ? "8rem" : "0"};
		}

		@media (width<=425px) {
			justify-content: ${({ isAdmin }) => isAdmin ? "flex-start" : "space-evenly"};
		}

		@media (width<=410px) {
			gap: ${({ isAdmin }) => isAdmin ? "6rem" : "0"};
		}

		@media (width<=365px) {
			gap: ${({ isAdmin }) => isAdmin ? "4rem" : "0"};
		}

		#btn-header-menu {
			appearance: none;
			background: none;
			border: 0;

			width: fit-content;
			margin-top: 0.6rem;

			cursor: pointer;
			transition: color 0.2s ease-in-out;

			margin-left: ${({ isAdmin }) => isAdmin ? "2.8rem" : "0"};

			@media (width>=425px) {
				margin-left: ${({ isAdmin }) => isAdmin ? "-4rem" : "0"};
			}

			@media (width>=481px) {
				margin-left: ${({ isAdmin }) => isAdmin ? "-6rem" : "0"};
			}

			@media (width>=530px) {
				margin-left: ${({ isAdmin }) => isAdmin ? "-8rem" : "0"};
			}

			@media (width>=570px) {
				margin-left: ${({ isAdmin }) => isAdmin ? "-10rem" : "0"};
			}

			@media (width>=621px) {
				margin-left: ${({ isAdmin }) => isAdmin ? "-12rem" : "0"};
			}

			@media (width>=661px) {
				margin-left: ${({ isAdmin }) => isAdmin ? "-15rem" : "0"};
			}

			@media (width>=710px) {
				margin-left: ${({ isAdmin }) => isAdmin ? "-18rem" : "0"};
			}

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

			.logotype-container {
				gap: 0.8rem;
			}

			@media (width >= 768px) {

				flex-direction: column;
				gap: 0;

				.logotype-container {
					gap: 1rem;
				}

				img {
					width: 3rem;
					height: 3rem;
				}

				h1 {
					font-size: 2.4rem;
					line-height: auto;
				}

				.admin-text {
					align-self: flex-end;
					margin-top: -0.4rem;
				}
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

    .input-container {
			border-radius: 0.5rem;
			width: 30%;

      svg {
        transform: scale(1.3);
      }

      input {
        padding-left: 1.2rem;
      }

			@media (width < 1024px) {
				width: 20rem;

				@media (width >= 900px) {
					width: 30%;
				}
			}

			@media (width >= 1244px) {
				width: 40%;
			}
    }

		#btn-new-dish {
			width: 21.6rem;

			@media (width < 1024px) {
				width: 13rem;

				@media (width >= 900px) {
					width: 18rem;
				}
			}
		}

		#btn-orders {
			width: 21.6rem;
			gap: 1rem;

			svg {
				transform: scale(1.5);
			}

			@media (width < 1024px) {
				width: 16rem;

				@media (width >= 900px) {
					width: 18rem;
				}
			}
		}

		#btn-sign-out {
			color: ${({ theme }) => theme.COLORS.WHITE_100};
			appearance: none;
			background: none;
			border: 0;

			height: fit-content;
			width: fit-content;
			transform: scale(1.6);

			transition: color 0.27s ease-in-out;

			&:hover {
				color: ${({ theme }) => theme.COLORS.BLUE_SKY};
				filter: none;
			}
		}

		@media (width >= 768px) {

			height: 9.6rem;
			padding: 0 2rem;
			
			justify-content: space-evenly;
			gap: 0;

			@media (width >= 1024px) {
				padding: 0 4rem;
				justify-content: space-evenly;
			}
		}
	}
`;
