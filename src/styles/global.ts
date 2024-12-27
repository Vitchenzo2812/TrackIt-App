import { Poppins, Source_Sans_3 } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

export const poppins = Poppins({ weight: '400', subsets: ['latin'] });
export const sourceSans = Source_Sans_3({ weight: '400', subsets: ['latin'] });

export const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  font-family: ${sourceSans.style.fontFamily}, sans-serif;
  font-weight: 400;
}

html {
  font-size: 62.5%;
}

body {
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
  
  scroll-behavior: auto;
}
`;
