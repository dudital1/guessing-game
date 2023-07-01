import { H6 } from "../../design-system/Typography/Typography";
import { generateRandomColor } from "../../utils/utils";
import { Wrapper } from "./ColorGuessing.styles";
import { Board } from "./components/Board/Board";
import { OptionsPanel } from "./components/OptionsPanel/OptionsPanel";

export const ColorGuessing = () => {
  const randomColor = generateRandomColor();

  return (
    <Wrapper>
      <H6>Can you guess the color?</H6>
      <Board currentRadomColor={randomColor}></Board>
      <OptionsPanel correctColor={randomColor} />
    </Wrapper>
  );
};
