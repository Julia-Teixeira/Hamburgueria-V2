import styled from "styled-components";

export const LiProduct = styled.li`
  min-width: 18.75rem;
  height: 22.625rem;
  list-style: none;

  background: #fff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;

  &:hover {
    transitions: 0.2s;
    transform: scale(1.1);
    border: 2px solid var(--color-primary);

    & > .divContent > button {
      background-color: var(--color-primary);
    }
  }
  & > .divImagem {
    background: var(--color-grey0);
    display: flex;
    justify-content: center;
    align-itms: center;
  }
  & > .divImagem > img {
    width: 11rem;
    height: 11rem;
    background: var(--color-grey0);
  }

  & > .divContent {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;

    padding: 1.25rem;

    & > h2 {
      font-weight: var(--fontWeight-bold);
      font-size: var(--fontSize-18);
      color: var(--color-grey600);
    }
    & > span {
      font-weight: var(--fontWeight-regular);
      font-size: var(--fontSize-12);
      color: var(--color-grey300);
    }

    & > p {
      font-weight: var(--fontWeight-semiBold);
      font-size: var(--fontSize-14);
      color: var(--color-primary);
    }
  }
`;
