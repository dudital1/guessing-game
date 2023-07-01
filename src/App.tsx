import { GlobalStyles } from "./GlobalStyles";
import { FlexColumn } from "./design-system/Flex/Flex";
import styled from "styled-components";
import { ColorGuessing } from "./pages/color-guessing/ColorGuessing";

const AppWrapper = styled(FlexColumn)`
  height: 100%;
`;

export const App = () => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <ColorGuessing />
    </AppWrapper>
  );
};
