import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--fontFamily-Inter);
  }
  body{
    background-color: #fff;
  }
  
  .container{
    max-width: 1368px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  :root{
    --color-primary: #27AE60;
    --color-secundary: #EB5757;
    
    --color-sucess: #168821;
    --color-negative: #E60000;
    --color-warning: #FFCD07;
    --color-information: #155BCB;

    --color-white: #ffffff;
    --color-grey0: #F5F5F5;
    --color-grey100: #E0E0E0;
    --color-grey200: #999999;
    --color-grey300: #828282;
    --color-grey600: #333333;
    --shadow: rgba(0, 0, 0, 0.25);

    --fontFamily-Inter: 'Inter', sans-serif;

    --fontWeight-bold: 700;
    --fontWeight-semiBold: 600;
    --fontWeight-medium: 500;
    --fontWeight-regular: 400;

    --fontSize-26: 1.625rem;
    --fontSize-22: 1.375rem;
    --fontSize-18: 1.125rem;
    --fontSize-16: 1.rem;
    --fontSize-14: 0.875rem;
    --fontSize-12: 0.75rem;

    --borderRadius-8: 0.5rem;
    --borderRadius-5: 0.3125rem;
  }

  @media (min-width: 690px) {
    .container{
      align-items: center;
      margin: 0 auto;
    }
  }
`;
