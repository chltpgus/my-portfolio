import { createGlobalStyle, ThemeProps } from "styled-components";
import { notoSansKrRgular } from "@/styles/fonts/notoSans";
import { ThemeType } from "@/components/Providers";

const GlobalStyle = createGlobalStyle<ThemeProps<ThemeType>>`
  html, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, acronym, address, big, cite, code, del, dfn, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, u, i, center, dl, dt, dd, menu, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    ${notoSansKrRgular.style};
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    overflow-x:hidden;
    background-color: ${(props) => props.theme.colors.backgroundColor};
    transition: background-color, color, 0.3s, 0.3s linear;
    color: ${(props) => props.theme.colors.textColor};
    &::-webkit-scrollbar {
      display: none;
    }
    
  }
  
  ul, li {
    list-style: none;
  }
  input {
    color: ${(props) => props.theme.colors.textColor};
    background: transparent;
    border: 0;
    outline: 0;
  }
  button {
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    background: 0;
    padding: 0;
    border: 0;
    outline: 0;
    cursor: pointer;
    color: ${(props) => props.theme.colors.textColor};
    transition:color linear 0.3s;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
  a {
    display: inline-block;
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor};
    transition: color linear 0.3s;
   
    &:visited {
      color: #ACAEB1;
   
    }
  }
  b {
    font-size: inherit;
  }
  em {
    font-style: initial;
    font-size: inherit;
  }
`;

export default GlobalStyle;
