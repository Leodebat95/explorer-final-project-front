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
    margin: 0 auto;

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
          cursor: default;

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
          cursor: default;

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

        .section-arrow-left,
        .section-arrow-right {
          display: none;
          cursor: pointer;
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
    @media (width>=428px) {
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

  @media (width >= 768px) {

    > main {
      max-width: 112.4rem;

      article {
        margin: 10.4rem auto 8.4rem;

        @media (width>=960px) {
          margin: 16.4rem auto 8.4rem;
        }

        @media (width>=1024px) {
          margin: 20.4rem auto 12.2rem;
        }

        img {
          width: 45.9rem;
          height: 28.8rem;

          margin-left: 0rem;
          margin-right: 26rem;

          @media (width>=810px) {
            margin-right: 33rem;
          }

          @media (width>=850px) {
            margin-right: 36rem;
          }

          @media (width>=910px) {
            margin-right: 40rem;
          }

          @media (width>=960px) {
            width: 55.8rem;
            height: 35rem;
            margin-right: 36rem;
          }

          @media (width>=1024px) {
            width: 65.6rem;
            height: 41.2rem;
            margin-right: 35rem;
          }

          @media (width>=1123px) {
            margin-right: 43rem;
          }
        }

        .text-container {
          border-radius: 0.8rem;
          height: 26rem;
          width: 100%;
          margin: 0 8.6rem;

          h2 {
            font-weight: 500;
            font-size: 2.8rem;
            line-height: 125%;
            
            margin-bottom: 0.8rem;
            margin-top: 6.8rem;
            margin-left: 40rem;
            margin-right: 4rem;

            @media (width>=810px) {
              font-size: 3.2rem;
              margin-top: 6.8rem;
            }

            @media (width>=828px) {
              font-size: 3.2rem;
              margin-top: 7.8rem;
            }

            @media (width>=850px) {
              font-size: 3.6rem;
              margin-top: 7.4rem;
              margin-left: 41rem;
            }

            @media (width>=910px) {
              margin-top: 7.4rem;
            }

            @media (width>=960px) {
              font-size: 4rem;
              margin-top: 6rem;
              margin-left: 49rem;
            }

            @media (width>=1024px) {
              line-height: 130%;
              margin-left: 54rem;
              margin-top: 6rem;
            }

            @media (width>=1050px) {
              margin-left: 58rem;
            }

            @media (width>=1123px) {
              margin-left: 49rem;
              margin-right: 0;
              margin-top: 8.8rem;
            }
          }

          p {
            max-width: none;
		        font-family: "Roboto", sans-serif;
            font-size: 1.4rem;
            line-height: 160%;

            margin-left: 40rem;
            margin-right: 5rem;

            @media (width>=850px) {
              margin-left: 41rem;
            }

            @media (width>=910px) {
              font-size: 1.6rem;
              line-height: 160%;
            }

            @media (width>=950px) {
              margin-right: 8rem;
            }

            @media (width>=960px) {
              margin-left: 49rem;
              margin-right: 5rem;
            }

            @media (width>=1021px) {
              margin-right: 6rem;
            }

            @media (width>=1024px) {
              margin-left: 54rem;
            }

            @media (width>=1050px) {
              margin-left: 58rem;
            }

            @media (width>=1123px) {
              margin-left: 49rem;
              margin-right: 0;
            }
          }
        }
      }

      section {
        margin: 0 8.6rem 4.8rem;

        &:nth-child(4) {
          margin-bottom: 11.6rem;
        }

        h1 {
          font-size: 3.2rem;
          cursor: default;
        }
      }
    }

    > main {
      section {
        .cards-container {
          .section-arrow-left {
            display: block;

            position: absolute;
            top: 48.3%;

            color: ${({ theme }) => theme.COLORS.GRAY_400};
            transform: scale(2.1);
          }

          .section-arrow-right {
            display: block;

            position: absolute;
            top: 48.3%;

            color: ${({ theme }) => theme.COLORS.GRAY_400};
            transform: scale(2.1);
          }
        }
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      transform: scale(0.5);
    }
  }

  @media (width >= 768px) and (width < 890px) {

    .section-arrow-left {
      left: 2.6%;
    }

    .section-arrow-right {
      right: 2.6%;
    }
  }

  @media (width >= 890px) and (width < 960px) {

    .section-arrow-left {
      left: 2.4%;
    }

    .section-arrow-right {
      right: 2.4%;
    }
  }

  @media (width >= 960px) and (width < 1020px) {

    .section-arrow-left {
      left: 2.2%;
    }

    .section-arrow-right {
      right: 2.2%;
    }
  }

  @media (width >= 1020px) and (width < 1120px) {

    .section-arrow-left {
      left: 2%;
    }

    .section-arrow-right {
      right: 2%;
    }
  }

  @media (width >= 1120px){

    .section-arrow-left {
      left: 1.9%;
    }

    .section-arrow-right {
      right: 1.9%;
    }
  }
`;
