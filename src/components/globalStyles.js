import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import BackgroundImage from '../images/backgrounds/B.svg';


export const GlobalStyle = createGlobalStyle`
  ${reset}
  select{
    height: 40px;
    font-size: 16px;
    background: none;
  }
  body{
    font-family: 'Poppins', sans-serif;
    line-height: 1.2;
    background: #f4eeea;
    background-image: url(${BackgroundImage});
         background-repeat: no-repeat;
         background-position: center;
         background-size: cover;
  }
  strong{
    font-family: 'Oswald', sans-serif;
    font-weight: 200;
    font-size: 1.5rem;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 20px 0;
  }
  h1{
    font-family: 'Oswald', sans-serif;
    font-weight: 200;

    font-size: 6em;
    letter-spacing: .5rem;
  }
  h2{
    font-size: 2.5em;
  }
  h3{
    font-size: 2em;
  }
  h4{
    font-size: 1.5em;
  }
  h5{
    font-size: 1em;
  }
  h6{
    font-size: 0.75em;
  }
  ul{
    margin-left: 20px;
    >li{
      list-style: disc;
    }
  }
`;
