import { styled } from "styled-components";


export const Container = styled.div`

  background: ${({ theme }) => theme.COLORS.BLACK_200};
  height: 29.3rem;
  width: 21rem;
  min-width: 21rem;

  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.COLORS.BLACK_300};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.4rem;

  position: relative;

  #btn-dish-picture {
    appearance: none;
    background: none;
    border: none;

    height: 8.8rem;
    width:8.8rem;
    border-radius: 50%;

    width: fit-content;
    margin-bottom: 1.2rem;
    cursor: pointer;

    > img {
      height: 8.8rem;
      width:8.8rem;

      transition: all 0.27s ease-in-out;

      &:hover {
        transform: scale(1.15);
        rotate: 7deg;
      }
    }
  }

  #btn-dish-name {
    appearance: none;
    background: none;
    border: none;

    height: 2rem;
    width: fit-content;
    margin-bottom: 1.6rem;
    cursor: pointer;

    h3 {
      color: ${({ theme }) => theme.COLORS.WHITE_300};
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;

      transition: color 0.2s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.COLORS.YELLOW};
      }
    }
  }

  p.description {
    display: none;
  }

  p.dish-value {
    color: ${({ theme }) => theme.COLORS.BLUE_SKY};
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;

    margin-bottom: 1.6rem;
    cursor: default;
  }

  .btn-group-container {
    width: 100%;

    .counter-group {
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;

      .counter {
        font-family: "Roboto", sans-serif;
        color: ${({ theme }) => theme.COLORS.WHITE_300};
        font-size: 1.6rem;
        
        font-weight: 400;
        line-height: 100%;
        margin: 0 1rem 0 1.2rem;
        cursor: default;
      }

      > button {
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        transform: scale(1.2);

        display: flex;
        align-items: center;
        transition: color 0.2s ease-in-out;
      }

      #btn-minus:hover {
        color: ${({ theme }) => theme.COLORS.RED_LIGHT};
      }

      #btn-plus:hover {
        color: ${({ theme }) => theme.COLORS.GREEN};
      }
    }
  }

  .btn-container {
    height: 3.2rem;
    border-radius: 0.5rem;
  }

  @media (width >= 768px) {

    height: 46.2rem;
    width: 30.4rem;
    min-width: 30.4rem;

    justify-content: space-between;
    padding: 2.8rem 2.4rem;

    .btn-heart,
    .btn-pencil {
      transform: scale(2);
      top: 2rem;
      right: 2.2rem;

      &:hover {
        transform: scale(2.12);
      }
    }

    #btn-dish-picture {
      height: 17.6rem;
      width: 17.6rem;
      border-radius: 50%;

      margin-bottom: 0;

      > img {
        height: 17.6rem;
        width: 17.6rem;

        &:hover {
          transform: scale(1.11);
          rotate: 7deg;
        }
      }
    }

    #btn-dish-name {
      height: auto;
      margin-bottom: 0;

      h3 {
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 140%;
      }
    }

    p.description {
      display: block;
      text-align: center;
      margin-bottom: 0;

      color: ${({ theme }) => theme.COLORS.GRAY_400};
      font-family: "Roboto", sans-serif;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 160%;
    }

    p.dish-value {
      font-size: 3.2rem;
      line-height: 160%;
      margin-bottom: 0;
    }

    .btn-group-container {
      width: auto;
      display: flex;
      align-items: center;
      gap: 2.2rem;

      .counter-group {
        margin-bottom: 0;

        .counter {
          font-size: 2rem;
          font-weight: 500;
          line-height: 160%;
          margin: 0 1.2rem 0 1.4rem;
        }

        > button {
          transform: scale(1.35);
        }
      }

      .btn-container {
        width: 10.2rem;
        height: 4.8rem;
      }
    }
  }
`;
