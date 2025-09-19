import { styled } from "styled-components";


export const Container = styled.footer`

	background: ${({ theme }) => theme.COLORS.BLACK_600};
	height: 7.7rem;

	display: flex;
	align-items: center;
	justify-content: space-around;

	@media (width<=450px) {
		justify-content: center;
		gap: 2rem;
	}

	.logo {
		gap: 0.7rem;

		.logotype-container {
			gap: 0.7rem;
		}

		h1 {
			color: ${({ theme }) => theme.COLORS.GRAY_700};
			font-size: 1.6rem;

			@media (width<=420px) {
				font-size: 1.4rem;
			}
		}

		img {
			width: 2.2rem;
			height: 2.2rem;

			@media (width<=420px) {
				width: 2rem;
				height: 2rem;
				margin-left: 2rem;
			}
		}
	}

	p {
		color: ${({ theme }) => theme.COLORS.WHITE_200};
		font-size: 1.2rem;
		font-weight: 400;

		cursor: default;

		@media (width<=420px) {
			font-size: 1rem;
			max-width: 16rem;
			text-align: center;
			margin-right: 2rem;
		}
	}

	@media (width >= 768px) {

		justify-content: space-between;
		padding-left: 10%;
		padding-right: 10%;

		.logo {
			gap: 0.8rem;

			.logotype-container {
				gap: 0.8rem;
			}

			h1 {
				font-size: 2rem;
			}

			img {
				width: 2.4rem;
				height: 2.4rem;
			}
		}

		p {
			font-size: 1.3rem;
			line-height: 160%;
		}
	}

	@media (width >= 1024px) {

		.logo {
			gap: 0.9rem;

			.logotype-container {
				gap: 1rem;
			}

			h1 {
				font-size: 2.4rem;
			}

			img {
				width: 2.9rem;
				height: 2.9rem;
			}
		}

		p {
			font-size: 1.4rem;
			line-height: 160%;
		}
	}
`;
