import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BLACK_400};
  }
  
  body, button, a, input, textarea {
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-weight: 400;
    font-size: 1.6rem;
    
    font-style: normal;
    outline: none;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  label {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-family: "Roboto", sans-serif;

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
    white-space: nowrap;
    cursor: pointer;
  }

  body::selection,
  *::selection {
    background: ${({ theme }) => theme.COLORS.BLUE_SKY};
    color: ${({ theme }) => theme.COLORS.BLACK_BLUE_900};
  }

  ::-webkit-scrollbar {
    width: 1.2rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BLACK_BLUE_900};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.GRAY_800};
    border-radius: 0.4rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.COLORS.BLUE_DARK};
    cursor: pointer;
  }
`;
