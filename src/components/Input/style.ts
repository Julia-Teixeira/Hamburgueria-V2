import styled, { css } from "styled-components";

interface iField {
  borderColor: string;
  validColor?: string;
}

export const FieldsetInput = styled.fieldset<iField>`
  position: relative;
  width: 100%;
  height: 60px;

  background: var(--color-grey0);
  ${({ validColor }) => {
    if (validColor) {
      return css`
        border: 0.125rem solid var(${validColor});
      `;
    } else {
      return css`
        border: 2px solid var(--color-grey0);
      `;
    }
  }}
  border-radius: var(--borderRadius-8);

  & > input {
    width: 100%;
    height: 100%;
    padding: 1.125rem;

    border-radius: var(--borderRadius-8);
    background: var(--color-grey0);
    border: none;
    outline: none;

    font-weight: var(--fontWeight-regular);
    font-size: var(--fontSize-16);
    line-height: 1.1875rem;
  }

  & > label {
    position: absolute;
    left: 0;
    padding: 1.125rem;
    pointer-events: none;
    transition: 0.5s;

    font-weight: var(--fontWeight-regular);
    font-size: var(--fontSize-16);
    line-height: 1.1875rem;
    color: var(--color-grey200);
    border-radius: var(--borderRadius-8);
  }

  & > input:valid ~ label,
  & > input:focus ~ label {
    font-weight: var(--fontWeight-regular);
    font-size: var(--fontSize-12);
    line-height: 0.9375rem;

    transform: translateX(10px) translateY(-13px);
    background: #fff;
    padding: 5px;
  }
  & > input:focus,
  & > input:valid {
    background: #fff;
  }
  &:focus-within {
    border: ${({ borderColor }) => "0.125rem solid var(" + borderColor + ")"};
  }

  & > p {
    margin-top: 0.3125rem;
    color: var(--color-negative);
  }
`;
