import { keyframes } from "styled-components";
import { styled } from "styled-components";


export const lateRenderAni = keyframes`

  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;


export const Container = styled.div`
  
  main {
    max-width: 76.7rem;
    padding: 0 5.6rem;
    margin: auto;

    display: grid;

    > #button-text {
      width: fit-content;
      
      margin: 3.6rem 0 1.6rem;

      display: flex;
      align-items: center;

      color: ${({ theme }) => theme.COLORS.WHITE_300};
      font-size: 2.4rem;
      font-weight: 500;
      line-height: 140%;

      transition: color 0.27s;

      &:hover {
        color: ${({ theme }) => theme.COLORS.BLUE_SKY};
      }

      > svg {
        transform: scale(1.7);
        margin-right: 0.6rem;
      }
    }

    img {
      width: 26.4rem;
      margin-bottom: 1.6rem;
      justify-self: center;
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE_300};
      font-size: 2.8rem;
      font-weight: 500;
      line-height: 140%;

      text-align: center;
      margin-bottom: 2.4rem;
    }

    > p {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 140%;
      
      text-align: center;
      margin-bottom: 2.4rem;
    }

    section {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      gap: 2.4rem;
      margin-bottom: 4.8rem;
    }

    .btn-group {
      margin-bottom: 5.4rem;
      display: flex;
      align-items: center;

      .counter-group {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.6rem;
        width: 40%;

        .counter {
          font-family: "Roboto", sans-serif;
          color: ${({ theme }) => theme.COLORS.WHITE_300};
          font-size: 2.2rem;
          
          font-weight: 500;
          line-height: 160%;
          margin: 0 1.4rem 0 1.6rem;
          cursor: default;
        }

        > button {
          color: ${({ theme }) => theme.COLORS.WHITE_100};
          transform: scale(1.3);

          display: flex;
          align-items: center;
          transition: color 0.2s ease-in-out;

          &#btn-minus:hover {
            color: ${({ theme }) => theme.COLORS.RED_LIGHT};
          }

          &#btn-plus:hover {
            color: ${({ theme }) => theme.COLORS.GREEN};
          }
        }
      }
    }

    .btn-container {
      width: 60%;

      svg {
        transform: scale(1.4);
        margin: 0.2rem 1.2rem 0 0;
      }
    }
  }

  footer {
    animation: ${lateRenderAni} 0.2s ease-in;
  }
`;
