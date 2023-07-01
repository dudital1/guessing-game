import styled from "styled-components";
export const StyledBoard = styled.div<{ backgroundColor: string }>`
  height: 200px;
  width: 300px;
  background-color: ${({ backgroundColor }) => `#${backgroundColor}`};
  border: 1px solid black;
  border-radius: 5px;
`;
