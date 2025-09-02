import { keyframes } from "styled-components";
import { styled } from "styled-components";


export const lateRenderAni = keyframes`

  from {
    opacity: 0;
    display: none;
  }

  to {
    opacity: 1;
    display: block;
  }
`;


export const Container = styled.div`

  .header-container {
    display: ${({ menuOpen }) => !menuOpen ? "block" : "none"};
  }

  > main {
    display: ${({ menuOpen }) => !menuOpen ? "block" : "none"};

    max-width: 76.7rem;
    margin: auto;

    article {
      margin-left: 1.6rem;
      margin-top: 4.4rem;
      margin-bottom: 6.2rem;

      display: flex;
      justify-content: center;
      position: relative;

      img {
        width: 19.1rem;
        height: 14.9rem;

        margin-left: 2rem;
        margin-right: 39rem;

        position: absolute;
        bottom: 0;
        z-index: 1;

        @media (width<=550px) {
          margin-left: 2rem;
          margin-right: 60%;
        }

        @media (width<=390px) {
          left: -3rem;
        }
      }

      .text-container {
        background: ${({ theme }) => theme.COLORS.GRADIENT_DARK_200};
        border-radius: 0.4rem;
        
        height: 12rem;
        width: 50rem;

        margin-right: 2rem;
        margin-left: 2rem;

        h2 {
          margin-bottom: 0.4rem;
          margin-top: 3.6rem;
          margin-left: 16rem;
          margin-right: 2.1rem;

          color: ${({ theme }) => theme.COLORS.WHITE_300};
          font-size: 1.8rem;
          line-height: 140%;
          font-weight: 700;

          @media (width<=550px) {
            margin-left: 18rem;
          }

          @media (width<=451px) {
            margin-top: 2.5rem;
            font-size: 1.6rem;
            max-width: 14rem;
          }

          @media (width<=420px) {
            margin-left: 16rem;
          }

          @media (width<=396px) {
            margin-top: 1.8rem;
          }

          @media (width<=368px) {
            margin-top: 0.9rem;
          }
        }

        p {
          max-width: 20.2rem;
          margin-left: 16rem;
          margin-right: 2.1rem;

          color: ${({ theme }) => theme.COLORS.WHITE_300};
          font-size: 1.2rem;
          line-height: 140%;
          font-weight: 400;

          @media (width<=550px) {
            margin-left: 18rem;
          }

          @media (width<=451px) {
            font-size: 1rem;
          }

          @media (width<=420px) {
            margin-left: 16rem;
          }
        }
      }
    }

    section {
      margin-bottom: 3.2rem;
      margin-left: 2.4rem;

      &:nth-child(4) {
        margin-bottom: 4.8rem;
      }

      h1 {
        margin-bottom: 2.4rem;

        color: ${({ theme }) => theme.COLORS.WHITE_300};
        font-size: 1.8rem;
        line-height: 140%;
        font-weight: 500;

        animation: ${lateRenderAni} 0.08s ease-in;
      }

      .cards-container {
        display: flex;
        gap: 1.6rem;

        position: relative;
        overflow-x: auto;

        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        &::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        .section-arrow-left {
          position: absolute;
          top: 47.5%;
          left: 2.2%;
          // z-index: 10;

          color: ${({ theme }) => theme.COLORS.WHITE_100};
          transform: scale(1.7);
          cursor: pointer;

          @media (width<=768px) {
            display: none;
          }
        }

        .section-arrow-right {
          position: absolute;
          top: 47.5%;
          right: 2.2%;
          // z-index: 10;

          color: ${({ theme }) => theme.COLORS.WHITE_100};
          transform: scale(1.7);
          cursor: pointer;

          @media (width<=768px) {
            display: none;
          }
        }
      }
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    transform: scale(0.4);
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.COLORS.BLUE_SKY};
    }
  }

  .swiper {
    @media (width>=769px) {
      mask-image: ${({ theme }) => theme.COLORS.GRADIENT_DARK_300};
    }
  }

  .waiting-items {
    color: ${({ theme }) => theme.COLORS.BLUE_SKY};
    font-size: 1.4rem;
    line-height: 100%;
    font-weight: 400;

    margin-top: 4rem;
    margin-bottom: 8rem;
    margin-left: 4rem;

    animation: ${lateRenderAni} 0.2s ease-in;
  }

  > footer {
    display: ${({ menuOpen }) => !menuOpen ? "flex" : "none"};
    animation: ${lateRenderAni} 0.2s ease-in;
  }
`;
