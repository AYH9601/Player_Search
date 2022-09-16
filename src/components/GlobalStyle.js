import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {box-sizing: border-box; padding:0; margin:0; text-align:left}
    ul,ol,li {list-style: none;}
    a {text-decoration:none;}
`;

export default GlobalStyle;