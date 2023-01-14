import styled from "styled-components";
import trash from "../../../img/trashcan.svg";

export const LiCart = styled.li`
  max-width: 28.2694rem;
  width: 100%
  height: 5rem;
  display: flex;
  gap: 0.625rem;

  .divImage {
    border-radius: var(--borderRadius-5);
    & > img{
      width: 5rem;
      height: 5rem;
      background: var( --color-grey100);
      border-radius: var(--borderRadius-5);
    }
  }
  
  & > .divContextContainer {
    width: 100%;

    & > .divContext {
    display: flex;
    justify-content: space-between;
      & > h3{
        font-weight: var(--fontWeight-bold);
        font-size: var(--fontSize-18);
        color: var(--color-grey600);
      }

      & > figure{
        width: 15px;
        height: 20px;

        border: none;

        background-color: transparent;
        background-image:url(${trash});
        background-repeat: no-repeat;
        background-position: center;

        cursor: pointer;
      }
    }

    & > .counter{
      margin-top: 20px;
      width: 106.56px;
      height: 34px;
      outline: 2px solid var(--color-grey0);
      display:flex;
      justify-content: space-between;
      align-items: center;

      & > button{
        width: 30.44px;
        height: 34px;
        background-color: var(--color-grey0);

        border: 2px solid var(--color-grey0);

        color: var(--color-secundary);
        font-weight: var(--fontWeight-regular);
        font-size: var(--fontSize-22);
        line-height: var(--fontSize-16);

        cursor: pointer;
      }

      & > span{
        color: var(--color-grey600);
        font-weight: var(--fontWeight-regular);
        font-size: var(--fontSize-12);
        line-height: var(--fontSize-16);
      }
    }
  }
`;
