import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'focus-visible/dist/focus-visible';
import {ChakraProvider, CSSReset} from '@chakra-ui/react'
import theme from './theme'
import {Global,css} from '@emotion/react'
import App from './App';


const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
   
`;
ReactDOM.render(
  <>
  
    
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles}/>
      <CSSReset/>
      <App />
    </ChakraProvider>
  </>,
  document.getElementById('root')
);

