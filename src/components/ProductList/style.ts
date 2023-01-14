import styled from "styled-components";

export const UlProduct = styled.ul`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  margin: 24px 15px;
  max-width: 1368px;
  height: 85vh;
  padding: 20px;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
    padding-top: 1.5rem;
    margin: 0 auto;
    overflow: hidden;
  }
`;
