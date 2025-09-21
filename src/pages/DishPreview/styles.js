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

  animation: ${InitialAnimation} 0.2s ease-in-out;

  .header-container {
    display: ${({ menuOpen }) => !menuOpen ? "block" : "none"};
  }
  
  > main {
    display: ${({ menuOpen }) => !menuOpen ? "grid" : "none"};

    max-width: 76.7rem;
    padding: 0 5.6rem;
    margin: 0 auto;

    @media (width <= 421px) {
      padding: 0 2.8rem;
    }

    .content-page {
      display: grid;
    }

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

    p.description {
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

    .btn-edit {
      max-width: 23.2rem;
      
      margin: 0 auto;
      margin-bottom: 5.4rem;
    }

    .btn-group {
      margin-bottom: 5.4rem;
      display: flex;
      align-items: center;

      @media (width >= 515px) and (width < 768px) {
        justify-content: center;
      }

      .counter-group {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.6rem;
        width: 40%;

        @media (width >= 515px) and (width < 768px) {
          width: 24%;
          margin-right: 3.2rem;

          @media (width >= 615px) {
            margin-right: 2rem;
          }
        }

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
      max-width: 23.2rem;
      width: 60%;

      svg {
        transform: scale(1.4);
        margin: 0.2rem 1.2rem 0 0;
      }
    }

    #btn-icon-receipt {
      @media (width <= 421px) {
        font-size: 1.3rem;

        svg {
          transform: scale(1.2);
          margin-right: 0.7rem;
        }
      }
    }
  }

  > footer {
    display: ${({ menuOpen }) => !menuOpen ? "flex" : "none"};
  }

  @media (width >= 768px) {

    > main {
      max-width: none;
      padding: 0 4.8rem;
      margin: 0;

      @media (width >= 840px) {
        padding: 0 8.6rem;
      }

      @media (width >= 950px) {
        padding: 0 12.2rem;
      }

      > #button-text {
        margin: 2.4rem 0 4.2rem;
      }

      .content-page {
        display: grid;
        grid-auto-flow: column;
        justify-content: start;

        gap: 4.8rem;
        margin-bottom: 15.6rem;
      }

      img {
        margin-bottom: 0;
        width: 39rem;
      }

      .content-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        h2 {
          font-size: 4rem;
          text-align: left;
        }

        p.description {
          font-size: 1.8rem;
          margin-top: -1rem;
          text-align: left;

          @media (width >= 950px) {
            font-size: 2.4rem;
            margin-top: 0;
          }
        }

        section {
          justify-content: flex-start;
          margin-bottom: 2.4rem;

          @media (width >= 950px) {
            margin-bottom: 4.8rem;
          }
        }

        .btn-edit {
          margin: 0;
          width: 13.1rem;
        }

        .btn-group {
          width: 100%;
          margin-bottom: 0;

          flex-direction: column;
          align-items: flex-start;
          gap: 1.6rem;

          @media (width >= 950px) {
            flex-direction: row;
            align-items: center;
            gap: 0;
          }

          .counter-group {
            width: auto;
            justify-content: flex-start;
            margin-right: 3.3rem;
          }
        }

        .btn-container {
          width: 18rem;

          svg {
            transform: scale(1.4);
            margin: 0.2rem 1.2rem 0 0;
          }
        }
      }
    }
  }

  @media (width >= 768px) and (width < 1024px) {

    > footer {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }
`;
