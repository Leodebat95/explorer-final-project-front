import { keyframes } from "styled-components";
import styled from "styled-components";


export const InitialAnimation = keyframes`

  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;


export const Container = styled.div`

  max-width: 76.7rem;

  margin: auto;
  margin-top: 10rem;
  
  .logo {
    padding: 0 4.7rem 0 6.5rem;
    animation: ${InitialAnimation} 0.7s ease-in-out;
  }

  @media (width <= 410px) {
    .logo {
      gap: 0.9rem;
    }

    img {
      width: 4rem;
      height: 4rem;
    }

    h1 {
      font-size: 3.6rem;
    }
  }

  @media (width <= 376px) {
    img {
      width: 3.8rem;
      height: 3.8rem;
    }

    h1 {
      font-size: 3.4rem;
    }
  }

  @media (width <= 360px) {
    .logo {
      padding: 0 5rem 0 5rem;
    }
  }

  @media (width <= 340px) {
    .logo {
      padding: 0 5rem 0 4.4rem;
    }
  }

  @media (width >= 768px) {
    max-width: none;
    margin-top: 12svh;

    display: flex;
    flex-direction: column;
    align-items: center;

    .logo {
      padding: 0;
      gap: 0;
      margin-bottom: 4rem;

      img {
        width: 5rem;
        height: 5rem;
        margin-right: 1.2rem;
      }

      h1 {
        font-size: 4.2rem;
      }

      .logotype-container {
        gap: 0;
      }
    }
  }

  @media (width >= 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .logo {
      margin-bottom: 0;
      margin-right: 14svw;
      margin-top: -12svh;
    }
  }
`;


export const Form = styled.form`

  margin: 7.3rem 0 12rem;
  padding: 0 4.7rem 0 6.5rem;

  display: flex;
  flex-direction: column;

  animation: ${InitialAnimation} 1s ease-in-out;

  p {
    display: none;
    cursor: default;
    white-space: nowrap;

    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;
  }

  label {
    margin-bottom: 0.8rem;
  }

  .input-container,
  #btn-access-account {
    margin-bottom: 3.2rem;
  }

  .btn-text-container {
    width: fit-content;
    margin: 0 auto;
  }

  @media (width >= 768px) {
    background: ${({ theme }) => theme.COLORS.BLACK_700};
    border-radius: 1.6rem;

    width: 47.6rem;
    margin: 0;
    margin-bottom: 4.8rem;
    padding: 6.4rem;
    padding-top: 7.4rem;

    p {
      display: block;
      margin: 0 auto 4.2rem;
    }
  }

  @media (width >= 1024px) {
    margin-bottom: 0;
  }
`;
