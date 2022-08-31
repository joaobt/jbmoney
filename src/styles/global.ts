import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {

  

  --red: #E52E4D;

  --green: #33cc95;

  --blue:#5429CC;

  --blue-light: #6933ff;

  --text-title:#363F5f;

  --text-body: #969cb3;

  --background:#f0f2f5;

  --shape: #FFFFFF;

}

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 html {
    @media (max-width: 1080px) { //  da 15px; e 16x 0.93.75
        font-size: 93.75;
    }

    @media (max-width:720px) { //  da 14px;  e 16 x 0.87.5%;
        font-size: 87.5%;
    }
 }

 body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
 }

 h1, h2, h3, h4, h5, h6, strong {
   font-weight: 600;
 }
 

 button {
    cursor:pointer;
 }


[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}
` 