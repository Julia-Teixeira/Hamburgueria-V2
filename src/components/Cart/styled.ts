import styled from "styled-components";

export const SectionModalContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  background: rgba(18, 18, 20, 0.5);
  width: 100vw;
  height: 100%;

  margin: 0 auto;

  display: flex;

  & > .modalBody {
    background: var(--color-primary);
    max-width: 500px;
    width: 100%;
    height: 54px;

    margin: 80px 10px;
    border-radius: 0.2005rem;

    @media (min-width: 527px) {
      margin: 80px auto;
    }

    & > header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      padding: 0 22px;

      & > h3 {
        font-weight: var(--fontWeight-bold);
        font-size: var(--fontSize-18);
        line-height: 28px;
        color: var(--color-white);
      }
      & > button {
        background-color: transparent;
        border: none;
        color: var(--color-grey100);
        cursor: pointer;
      }
    }

    & > main {
      max-width: 500px;
      min-height: 158px;
      width: 100%;
      background-color: var(--color-white);
      border-radius: 0px 0px 5px 5px;

      & > .noItems {
        text-align: center;
        padding-top: 50px;
      }

      & > .items {
        & > ul {
          overflow-y: auto;
          overflow-x: hidden;
          max-height: 400px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background-color: var(--color-white);

          & > .totalContainer {
            max-width: 500px;
            width: 100%;
            height: 7.75rem;
            background-color: var(--color-white);
            border-top: 0.125rem solid var(--color-grey0);
            padding: 1rem 0.625rem;

            & > div {
              display: flex;
              justify-content: space-between;
              margin-bottom: 1rem;

              & > p {
                font-weight: var(--fontWeight-semiBold);
                font-size: var(--fontSize-14);
                color: var(--color-grey600);
              }
              & > span {
                font-weight: var(--fontWeight-semiBold);
                font-size: var(--fontSize-14);
                color: var(--color-grey300);
              }
            }

            & > button {
              cursor: pointer;
              width: 100%;
              height: 60px;

              border: none;
              border-radius: var(--borderRadius-8);

              background-color: var(--color-grey100);

              color: var(--color-grey300);
            }
          }
        }
      }
    }
  }
`;
