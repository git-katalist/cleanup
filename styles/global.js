import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*, *::before, *::after{
margin:0;
padding:0;
box-sizing:border-box;
}
html, body{
height:100%;
color: white;
font-family: sans-serif;
font-size: 62.5%;
}
/* #__next{
height:auto;
display: grid;
grid-template-rows: auto 1fr auto;
height:100%;
}
body{
    background-color:#F8FAFC;
}
main{
    h1{
        padding: 2rem 0;
    }
    h4{
        color: yellow;
        font-size: 5rem;
    }
    p{
        color: white;
    }
    
} */

[class^="number-slide"],
[class*=" number-slide"] {
  background: grey;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 100vh;
  max-height: 100vh;
  position: relative;
  transition: all 3000ms ease-in;


  p{
    font-size: 18px;
    width: 40%;
    line-height: 1.7;
  }
}

.number-slide1 {
    background: url("./slider/bike-lesson.jpg");
        /* background-position: 70% 50%;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0; */
        background-position: 70% 50%;
        background-size: cover;
        background-repeat: no-repeat;

}

.number-slide2 {

  background: url("./slider/Connected-Medical-Devices.jpg");
        background-position: 0% 50%;
        background-size: cover;
        background-repeat: no-repeat;
}

.number-slide3 {

  background: url("./slider/family-fun.jpg");
        background-position: 0% 50%;
        background-size: cover;
        background-repeat: no-repeat;
}

.number-slide4 {

  background: url("./slider/scissor-gloves.jpg");
        background-position: 0% 50%;
        background-size: cover;
        background-repeat: no-repeat;
}

.number-slide5 {
  /* background: rgb(255, 64, 156);
  background: linear-gradient(
    128deg,
    rgba(255, 64, 156, 1) 0%,
    rgba(255, 63, 63, 1) 100%
  ); */

  background: url("./slider/team-building.jpg");
        background-position: 0% 50%;
        background-size: cover;
        background-repeat: no-repeat;
}
.number-slide6 {
  /* background: rgb(64, 76, 255);
  background: linear-gradient(
    128deg,
    rgba(64, 76, 255, 1) 0%,
    rgba(174, 63, 255, 1) 100%
  ); */
  background: url("./slider/team-building.jpg");
        background-position: 0% 50%;
        background-size: cover;
        background-repeat: no-repeat;
}



`;

export { Global };
