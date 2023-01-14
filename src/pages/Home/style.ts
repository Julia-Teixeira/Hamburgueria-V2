import styled from "styled-components";
import logo from "../../img/logo.svg";
import searchIcon from "../../img/searchIcon.svg";
import searchIconGrey from "../../img/searchIcon-Grey.png";
import logOut from "../../img/logOut.svg";
import cart from "../../img/cart.svg";

export const MainHome = styled.main`
  max-width: 100vw;
  height: 100vh;
  & > header {
    background: var(--color-grey0);
    width: 100vw;
    height: 80px;
  }
  & > header > .divContainer {
    max-width: 1368px;
    height: 100%;
    margin: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 1300px) {
      margin: 0 auto;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 111px;
    width: 100%;
    @media (min-width: 768px) {
      max-width: 450px;
    }
  }

  .figureLogo {
    background-image: url(${logo});
    width: 150px;
    height: 22.85px;
  }
  .divCart {
    position: relative;
  }
  .divCart > p {
    padding-top: 3px;
    position: absolute;
    left: 9px;
    top: -12px;
    width: 20px;
    height: 24px;
    z-index: 1;

    background-color: var(--color-primary);
    border-radius: 7px;

    color: #fff;
    text-align: center;
    font-weight: var(--fontWeight-bold);
    font-size: var(--fontSize-14);
  }
  .figureCart {
    background: url(${cart}) no-repeat center;
    width: 25px;
    height: 25px;
  }
  .divSearch {
    width: 365px;
    height: 60px;
    padding: 0 12px;

    background: #fff;
    border: 2px solid var(--color-grey100);
    border-radius: var(--borderRadius-8);

    justify-content: space-between;
    align-items: center;
    display: none;

    &:focus-within {
      border: 0.125rem solid var(--grey100);
      color: var(--grey100);
    }

    @media (min-width: 768px) {
      display: flex;
    }
  }

  .divSearch2 {
    width: 300px;
    height: 60px;
    padding: 0 12px;

    background: #fff;
    border: 2px solid var(--color-grey100);
    border-radius: var(--borderRadius-8);

    justify-content: space-between;
    align-items: center;
    display: flex;

    position: absolute;
    left: 106px;
    z-index: 2;

    &:focus-within {
      border: 0.125rem solid var(--grey100);
      color: var(--grey100);
    }
  }

  .divSearch > input,
  .divSearch2 > input {
    border: none;
    outline: none;
    padding: 10px;
    width: 281px;
  }
  .backgroundColor {
    background-color: var(--color-primary);
    border-radius: var(--borderRadius-8);
  }
  .figureSearch {
    background: url(${searchIconGrey}) no-repeat center;
    background-size: contain;
    width: 23px;
    height: 25px;
    @media (min-width: 768px) {
      display: none;
    }
  }
  .figureSearch2 {
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 32%;
    width: 53px;
    height: 40px;
    cursor: pointer;
  }
  .figureLogOut {
    background: url(${logOut}) no-repeat center;
    width: 28px;
    height: 32px;
  }
  .figureLogOut,
  .figureSearch,
  .figureCart {
    cursor: pointer;
  }

  .main {
    display: flex;
    flex-direction: column;
    max-width: 1368px;
    padding-top: 20px;
    margin: 0 15px;

    @media (min-width: 1373px) {
      margin: 0 auto;
    }

    .searchInfo {
      display: flex;
      justify-content: space-between;

      button {
        background-color: transparent;
        outline: none;
        border: none;

        font-size: var(--fontSize-18);

        cursor: pointer;
      }
    }
  }
`;
