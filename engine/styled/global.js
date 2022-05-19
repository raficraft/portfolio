import { createGlobalStyle } from "styled-components";
import { S } from "./function";

export const GlobalStyle = createGlobalStyle`


/* font-family: 'Bigshot One', cursive;
font-family: 'Khand', sans-serif;
font-family: 'Trykker', serif; */

:root{

  --primary-bg: #32373B;
  --secondary-bg :#4A5859;
  --tertiary-bg :#84B59F;
  --quaternary-bg :#F4B860;
  --quinary-bg :#C83E4D;
  --wrapper_inside : 1330px;

  
}

html {
  scroll-behavior: smooth;
}

body{
  font-family: 'Khand', sans-serif, 'Bigshot One', cursive , 'Trykker', serif;
  background-color: #f4f4f4ff;
}
*{
   margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box ;
}

a{color : black;}


li {
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
  color: var(--primary-bg);
  font-weight: 500 ;
}

h1 {
  font-size: 1.75em;
  line-height: 1.2;
}

h2 {
  font-size: 1.5em;
  font-family: 'Bigshot One', cursive;
  margin-bottom: 1rem;

}

h3 {
  font-size: 1.25em;
  font-family: 'Bigshot One', cursive;
}

h4 {
  font-size: 1.125em;
  font-family: 'Bigshot One', cursive;
}

h5,
h6 {
  font-size: 1em;
  font-family: 'Bigshot One', cursive;
}

// ul,
// ol {
//   margin-left: 2.5rem;
// }
ul {
  list-style-type: square;
}

ol {
  list-style: decimal;
}

p,blockquote{
  color: var(--primary-bg);
  font-family: 'Trykker', serif;
}

button {
  cursor: pointer;
}

.wrapper_inside{
  max-width: var(--wrapper_inside);
  width : 100%;
  margin : auto auto;
  }


  @media screen and (max-width: 1439px) {
    width: calc(100% - 1rem);
  }
}

.main_content{
  padding : 1rem;  
  margin : 0 0 12rem 0;


`;
