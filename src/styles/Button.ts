import styled from "styled-components";

interface iButtonProps {
  width: number;
  height: number;
  color: string;
  backgroundColor: string;
}

export const Button = styled.button<iButtonProps>`
  cursor: pointer;
  border: none;
  border-radius: var(--borderRadius-8);

  font-size: var(--fontSize-14);
  font-weight: var(--fontWeight-semiBold);

  width: ${({ width }) => width / 16 + "rem"};
  height: ${({ height }) => height / 16 + "rem"};

  color: ${({ color }) => "var(" + color + ")"};
  background-color: ${({ backgroundColor }) => "var(" + backgroundColor + ")"};
`;
