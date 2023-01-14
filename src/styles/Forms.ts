import styled, { css } from "styled-components";
import shoppingBag from "../img/shopping-bag.svg";
import balls from "../img/elipse.svg";

interface iForm {
  page: "login" | "register";
}

export const SectionForm = styled.section<iForm>`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  align-items: center;
  margin: 0 0.9375rem;

  & > article {
    margin-top: 3.3125rem;
    display: flex;
    flex-direction: column;
    gap: 1.875rem;

    & > img {
      width: 15.2144rem;
    }
    & > div {
      padding: 1.0625rem;
      display: flex;
      gap: 1.1875rem;

      border: 1px solid var(--color-grey100);
      box-shadow: 0rem 0.25rem 2.5rem -1.25rem var(--shadow);
      border-radius: var(--borderRadius-5);

      & > p {
        font-weight: var(--fontWeight-regular);
        font-size: var(--fontSize-14);
        line-height: 1.375rem;
        color: var(--color-grey300);
        max-width: 23.5625rem;
        width: 100%;

        & > strong {
          color: var(--color-grey600);
          font-weight: var(--fontWeight-regular);
        }
      }

      & > figure {
        border-radius: 0.3125rem;
        min-width: 3.75rem;
        min-height: 3.75rem;

        background: rgba(39, 174, 96, 0.1) url(${shoppingBag}) center no-repeat;
      }
    }
    & > .balls {
      display: none;
    }
  }

  & > form {
    max-width: 31.25rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.9375rem;

    border: 0.125rem solid var(--color-grey0);
    box-shadow: 0rem 0rem 1.875rem -1.25rem var(--shadow);
    border-radius: 0.3125rem;

    padding: 1rem 1.125rem;

    & > h2 {
      font-weight: var(--fontWeight-bold);
      font-size: var(--fontSize-18);
      line-height: 1.5rem;
      color: var(--color-grey600);
    }

    & > div{
      display: flex;
      justify-content: space-between;

      & > h2 {
        font-weight: var(--fontWeight-bold);
        font-size: var(--fontSize-18);
        line-height: 1.5rem;
        color: var(--color-grey600);
      }

      & > a{
        font-weight: var(--fontWeight-medium);
        font-size: var(--fontSize-14);
        line-height: 1.375rem;
        color: var(--color-grey300);
      }
    }

    & > button {
      max-width: 28.25rem;
      width: 100%;
      height: 3.75rem;
      cursor: pointer;

      font-weight: var(--fontWeight-semiBold);
      font-size: var(--fontSize-16);
      line-height: 1.75rem;
      color: var(--color-grey0);

      background: var(--color-primary);
      border-radius: var(--borderRadius-8);
      border: none;
    }
    & > p {
      width: 15.625rem;
      font-weight: var(--fontWeight-regular);
      font-size: var(--fontSize-14);
      line-height: 1.125rem;
      text-align: center;
      margin: 0 auto;

      color: var(--color-grey200);
    }

    & > a {
      max-width: 28.25rem;
      width: 100%;
      height: 3.75rem;

      text-decoration: none;
      font-weight: var(--fontWeight-semiBold);
      font-size: var(--fontSize-16);
      line-height: 1.75rem;
      color: var(--color-grey200);

      background: var(--color-grey0);
      border-radius: var(--borderRadius-8);

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media (min-width: 690px) {
    justify-content: center;
    gap: 3.875rem;

    max-width: 939px;
    width: 100%;
    height: 461px;

    & > article {
      & > .balls {
        display: block;
        width: 11.3225rem;
        height: 4.9375rem;
        background-image: url(${balls});
        border: none;
        box-shadow: none;
      }
    }
  ${({ page }) => {
    if (page === "login") {
      return css`
        flex-direction: row-reverse;
      `;
    } else {
      return css`
        flex-direction: row;
      `;
    }
  }}
`;
