import styled from "styled-components";

const CarouselContainer = styled.div`
  margin-top: -2vh;
  [class^="number-slide"],
  [class*=" number-slide"] {
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: calc(70vh - 5vh);
    max-height: 100vh;
    cursor: pointer;
  }

  .number-slide1 {
    background: url("/bike-lesson.jpg");
    background-position: top center;
    background-size: cover;

    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      /* background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.7) 0%,
                rgba(0, 0, 0, 0.3) 100%
            ); */
      z-index: 1;
    }
  }

  .number-slide2 {
    background: url("/Connected-Medical-Devices.jpg");
    background-position: center;
    background-size: cover;

    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      /* background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 0.8) 60%,
                rgba(0, 0, 0, 0.3) 100%
            ); */
      z-index: 1;
    }
  }

  .number-slide3 {
    background: url("/family-fun.jpg");
    background-position: center;
    background-size: cover;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      /* background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 0.8) 60%,
                rgba(0, 0, 0, 0.3) 100%
            ); */
      z-index: 1;
    }
  }

  .number-slide4 {
    background: url("/team-building.jpg");
    background-position: center;
    background-size: cover;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* background-color: rgba(0, 0, 0, 0.8); */
      background: rgba(0, 0, 0, 0.4);
      background-blend-mode: overlay;
      z-index: 1;
    }
  }

  .number-slide5 {
    background: url("/scissor-gloves.jpg");
    background-position: center;
    background-size: cover;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* background-color: rgba(0, 0, 0, 0.8); */
      background: rgba(0, 0, 0, 0.6);
      background-blend-mode: overlay;
      z-index: 1;
    }
  }
  .number-slide6 {
    background: rgb(64, 76, 255);
    background: linear-gradient(
      128deg,
      rgba(64, 76, 255, 1) 0%,
      rgba(174, 63, 255, 1) 100%
    );
  }

  .navigation-wrapper {
    position: relative;

    & .content {
      width: 60%;
      height: 40%;
      display: grid;
      /* align-items: space-between;
            justify-items: center;
            place-items: center; */
      h1 {
        width: 90%;
        color: #f9f9f9;
        text-shadow: 0 0.5px 1px rgba(249, 249, 249, 0.7);
        font-size: 2rem;
        span {
          color: #f2f5f9;
          text-shadow: 0 1px 3px #2e3191;
        }

        @media screen and (min-width: 960px) {
          width: 100%;
          font-size: 3rem;
          color: #2e3191;
        }
      }
      p {
        width: 90%;
        display: grid;
        font-size: 14px;
        line-height: 1.5;
        /* justify-items: center;
                align-items: center; */

        @media screen and (min-width: 960px) {
          font-size: 18px;
          line-height: 2;
          width: 40%;
          justify-content: start;
        }
      }

      @media screen and (min-width: 640px) {
        width: 80%;
        height: 60%;
        margin-left: 2.4rem;
      }

      @media screen and (min-width: 64rem) {
        width: 80%;
        height: 60%;
        margin-left: 1.74rem;
      }
    }

    a > button {
      background-color: white;
      padding: 0.4rem 1.2rem;
      text-transform: uppercase;
      border-radius: 2rem;
      border: 1px solid #f2f5f9;
      transition: all 350ms ease;
      cursor: pointer;

      &:hover {
        background-color: #f2f5f9;
        border: 1px solid #ffffff;
        transform: scale(1.02);
        line-height: 1rem;
      }
    }
  }

  .dots {
    display: flex;
    padding: 10px 0;
    justify-content: center;
    position: absolute;
    z-index: 99;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
  }

  .dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
    display: block;
  }

  .dot.active {
    background: #000;
  }

  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #fff;
    cursor: pointer;
  }

  .arrow--left {
    left: 30px;
  }

  .arrow--right {
    left: auto;
    right: 30px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
  }

  .content {
    z-index: 2;
  }
`;

export { CarouselContainer };
