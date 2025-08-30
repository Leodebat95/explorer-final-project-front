import { styled } from "styled-components";


export const ContainerMenu = styled.div`

  header {
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



export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.BROWN};

    display: flex;
    align-items: center;

    padding: 0 144px;

    #button-text {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7px;

      font-size: 16px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.PINK};

      > svg {
        transform: scale(1.1);
      }
    }
  }
`;


export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  }

  #buttons {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 24px;
  }

  > #inputs {
    width: 340px;
    margin-bottom: 9px;
  }
`;


export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 64px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;

      color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
    }
  }
`;
