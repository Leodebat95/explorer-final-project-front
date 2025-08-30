import { styled } from "styled-components";


export const Container = styled.div`

  main {
    max-width: 76.7rem;
    margin: auto;

    #button-text {
      width: fit-content;

      margin: 1.2rem 0 3.6rem;
      padding: 0 3.2rem;

      display: flex;
      align-items: center;

      color: ${({ theme }) => theme.COLORS.WHITE_300};
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 140%;

      transition: color 0.3s;

      &:hover {
        color: ${({ theme }) => theme.COLORS.BLUE_SKY};
      }
    }
    
    > h1 {
      max-width: 76.7rem;

      margin-bottom: 4rem;
      padding: 0 3.2rem;

      color: ${({ theme }) => theme.COLORS.WHITE_300};
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 140%;
    }
  }
`;


export const Form = styled.form`
  max-width: 76.7rem;

  margin-bottom: 5.4rem;
  padding: 0 3.2rem;

  .input-container,
  textarea {
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;
  }

  .btn-container {
    background: ${({ theme }) => theme.COLORS.PINK};
  }

  #create-img-label + div {
    margin: 0;
  }

  #create-img-inp {
    display: none;
  }

  #create-img-label {
    background: ${({ theme }) => theme.COLORS.BLACK_BLUE_900};
    border: 0;
    border-radius: 0.8rem;
    margin: 1.6rem 0 2.4rem;

    display: flex;
    align-items: center;

    height: 4.8rem;
    width: 100%;
    padding: 0 1.8rem;

    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;

    &:hover {
      background: ${({ theme }) => theme.COLORS.BLUE_DARK};
    }

    > svg {
      transform: scale(1.5);
      margin: 0 0.9rem 0 0.4rem;
    }
  }

  #create-img-fake-label {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-family: "Roboto", sans-serif;

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;

    margin-bottom: 2rem;
    cursor: default;
  }

  #select-container {
    position: relative;
    cursor: pointer;

    #caret-down {
      position: absolute;
      right: 1.6rem;
      top: 1.6rem;

      transform: scale(1.2);
    }

    select {
      background: ${({ theme }) => theme.COLORS.BLACK_BLUE_900};
      border: 0;
      border-radius: 0.8rem;
      outline: none;
      margin: 1.6rem 0 2.4rem;

      display: flex;
      align-items: center;

      height: 4.8rem;
      width: 100%;
      padding: 0 1.8rem;

      color: ${({ theme }) => theme.COLORS.WHITE_100};
      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 100%;

      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      &:hover {
        cursor: pointer;
      }

      &:focus-within {
        background: ${({ theme }) => theme.COLORS.BLUE_DARK};
      }
    }

    option {
      background: ${({ theme }) => theme.COLORS.BLUE_DARK};
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }

  #tags-title {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;

    white-space: nowrap;
    cursor: default;
    margin-top: 2.8rem;
    margin-bottom: 2rem;
  }

  #tags-container {
    background: ${({ theme }) => theme.COLORS.BLACK_BLUE_900};
    border: 0;
    border-radius: 0.8rem;
    outline: none;
    margin: 1.6rem 0 2.4rem;

    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    min-height: 4.8rem;
    width: 100%;
    padding: 0.8rem 1rem;
  }

  #create-price {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type=number] {
      appearance: textfield;
      -moz-appearance: textfield;
    }
  }
`;
