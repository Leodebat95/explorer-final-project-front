import { styled } from "styled-components";


export const Container = styled.div`

  display: ${({ menuOpen }) => menuOpen ? "block" : "none"};

  .mob-header {
    background: ${({ theme }) => theme.COLORS.BLACK_700};
    width: 100%;
    height: 11.4rem;
    padding: 5.6rem 2.8rem 2.4rem;

    display: flex;
    align-items: center;

    button {
      appearance: none;
      background: none;
      border: 0;

      display: flex;
      align-items: center;
      gap: 1rem;

      color: ${({ theme }) => theme.COLORS.WHITE_100};
      font-family: "Roboto", sans-serif;
      font-size: 2.1rem;
      font-weight: 400;
      
      width: fit-content;
      cursor: pointer;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.COLORS.BLUE_SKY};
      }

      > svg {
        transform: scale(1.3);
        margin-top: -0.2rem;
      }
    }
  }

  main {
    max-width: 76.7rem;
    margin: 3.6rem auto 0;
    padding: 0 2.8rem;

    .input-container {
      margin-bottom: 3rem;

      > svg {
        transform: scale(1.3);
      }

      input {
        padding-left: 1.2rem;
      }
    }

    .btn-container {
      padding: 1rem 0;
      border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.BLACK_BLUE_1000};
    }

    button {
      display: block;

      color: ${({ theme }) => theme.COLORS.GRAY_400};
      font-size: 2.4rem;
      font-weight: 400;
    }
  }

  footer {
    position: absolute;
    bottom: 0;

    width: 100%;
  }
`;
