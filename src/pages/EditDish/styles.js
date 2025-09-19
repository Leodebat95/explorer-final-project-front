import { styled } from "styled-components";


export const Container = styled.div`

  .header-container {
    display: ${({ menuOpen }) => !menuOpen ? "block" : "none"};
  }
  
  > main {
    display: ${({ menuOpen }) => !menuOpen ? "block" : "none"};

    max-width: 86rem;
    margin: 0 auto;

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

  > footer {
    display: ${({ menuOpen }) => !menuOpen ? "flex" : "none"};
  }

  @media (width >= 1024px) {

    > main {
      max-width: none;
      margin: 0 12.5rem;

      #button-text {
        padding: 0;
        margin: 4rem 0 2.4rem;

        font-size: 2.4rem;
        gap: 0.4rem;

        svg {
          transform: scale(1.6);
        }
      }

      > h1 {
        padding: 0;
        margin-bottom: 3.2rem;
      }
    }
  }
`;


export const Form = styled.form`
  max-width: 86rem;

  margin-bottom: 5.4rem;
  padding: 0 3.2rem;

  .input-container,
  textarea {
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;
  }

  #edit-img-label + div {
    margin: 0;
  }

  #edit-img-inp {
    display: none;
  }

  #edit-img-label {
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

  #edit-img-fake-label {
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

  #edit-price {
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

  aside {
    display: flex;
    justify-content: center;
    gap: 3.2rem;

    .btn-container {
      background: ${({ theme }) => theme.COLORS.PINK};
      max-width: 24.6rem;
    }

    #btn-delete {
      background: ${({ theme }) => theme.COLORS.BLACK_BLUE_1000};
      color: ${({ theme }) => theme.COLORS.RED_LIGHT};

      filter: none;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: ${({ theme }) => theme.COLORS.RED_LIGHT};
        color: ${({ theme }) => theme.COLORS.BLACK_200};
      }
    }
  }

  @media (width >= 1024px) {

    max-width: none;
    margin-bottom: 11.6rem;
    padding: 0;

    .row-one,
    .row-two {
      display: flex;
      gap: 3.2rem;
      width: 100%;
    }

    .row-one {
      .desktop-container-inp-img {
        width: 35%;

        #edit-img-label {
          border-radius: 0.5rem;
          margin-bottom: 3.2rem;
        }
      }

      .desktop-container-inp-name {
        width: 40%;
        margin-top: -0.4rem;
      }

      .desktop-container-select {
        width: 25%;
        margin-top: -0.4rem;

        #select-container select {
          border-radius: 0.5rem;
        }
      }
    }

    .row-two {
      .desktop-container-ingredients {
        width: 80%;

        #tags-title {
          margin-top: 0;
        }

        #tags-container {
          border-radius: 0.5rem;
          gap: 1.2rem;
          margin-bottom: 2.8rem;
        }
      }

      .desktop-container-inp-price {
        width: 20%;
        margin-top: -0.4rem;
      }
    }

    textarea {
      margin-bottom: 2.7rem;
    }

    aside {
      justify-content: flex-end;

      .btn-container {
        width: 17.2rem;
        border-radius: 0.5rem;
      }

      #btn-delete {
        width: 13.5rem;
      }
    }
  }
`;
