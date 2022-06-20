import { createGlobalStyle } from "styled-components";
import { S } from "./function";

export const GlobalStyle = createGlobalStyle`


/* font-family: 'Bigshot One', cursive;
font-family: 'Khand', sans-serif;
font-family: 'Trykker', serif; */
/*font-family: 'Poppins', sans-serif;*/

:root{

  --primary-bg: #32373B;
  --secondary-bg :#4A5859;
  --tertiary-bg :#b34531;
  --quaternary-bg :#a02a0c;
  --quinary-bg :#C83E4D;
  --grey-light : #d8e1e8; 
  --wrapper_inside : 1330px;

  --primary-font: font-family: 'Bigshot One', cursive;;
  --secondary-font :font-family: 'Poppins', sans-serif;
  --tertiary-font :font-family: 'Poppins', sans-serif;; 

  @media (max-width: 601px) {
    --wrapper_inside : calc(100vw - 2rem);
  }

  
}

b{
  color :#C15807;
  
}

a{
    text-decoration-color: #f0830f;
  }

html {
  scroll-behavior: smooth;
  min-width : 100%;
}

body{
  font-family: 'Khand', sans-serif, 'Bigshot One', cursive , 'Trykker', serif;
  background-color: #f4f4f4ff;
  min-width : 100%;
}
*{
   margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box ;
}

#__next{
  position : relative;
}

a{color : black;}


li {
  list-style: none;
  font-family:  'Khand', sans-serif ;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
  color: white;
  font-weight: 500 ;
}

h1 {
  font-size: 1.75em;
  line-height: 1.2;
}

h2 {
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;;
  margin-bottom: 1rem;
  font-weight: bold;

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

 /* ul,
 ol {
   margin-left: 2.5rem;
 } */
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


hr{
  height: 2px ;
  background-color: var(--grey-light) ;
  margin : 4rem 0;
}



/* .main_content{
  padding : 1rem;  
  margin : 0 0 10rem 0;
} */



.bullet_point {
      margin: 2rem;
      li{
        margin : 0 0 1rem;
        list-style : square;
        color : white;
      }
    }
.text_2r{
  font-size: 2rem ;
}

.text_uppercase{
  text-transform: uppercase ;
}

.pa1{
  padding: 1rem ;
}

.pa1_5{
  padding: 1.5rem ;
}

.pa2{
  padding: 2rem ;
}





.box_item{
  background-color: #FFF ;
  padding : 1rem;
  border : 1px solid var(--grey-light);
  border-radius : 5px;
}

.text{
  line-height: 36px ;
  word-break: break-word;
  font-size: 22px;
  color : white;
}

.title_big{
  font-size : 2rem;
}

.main{
  width : 100%;
}


#__Hero *{
  color : white;
}
`;
