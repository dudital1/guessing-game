import {
  StyledOptionsPanel,
  OptionButton,
  OptionsWrapper,
  UserIndication,
} from "./OptionsPanel.styles";
import { useMemo, useState } from "react";
import {
  generateDifferentRandomColor,
  shuffleArray,
} from "../../../../utils/utils";
import { H6 } from "../../../../design-system/Typography/Typography";

interface IOptionsPanelProps {
  correctColor: string;
}
export const OptionsPanel: React.FC<IOptionsPanelProps> = ({
  correctColor,
}) => {
  const [guessedAnswers, setGuessedAnswers] = useState<number[]>([]);

  const options = useMemo(() => {
    const options = [
      correctColor,
      generateDifferentRandomColor(correctColor),
      generateDifferentRandomColor(correctColor),
    ]
    return shuffleArray(options);
  }, []);

  const correctAnswerIndex = useMemo(() => {
    return options.findIndex((op) => op === correctColor);
  }, [options]);

  const isUserCorrect = useMemo(() => {
    return guessedAnswers.includes(correctAnswerIndex);
  }, [guessedAnswers]);

  return (
    <StyledOptionsPanel>
      <OptionsWrapper>
        {options.length > 0 &&
          options.map((op, idx) => {
            return (
              <OptionButton
                disabled={
                  guessedAnswers.includes(idx) && idx !== correctAnswerIndex
                }
                onClick={() =>
                  setGuessedAnswers((prevOps) => [...prevOps, idx])
                }
              >{`#${op}`}</OptionButton>
            );
          })}
      </OptionsWrapper>
      {guessedAnswers.length > 0 && (
        <UserIndication isCorrect={isUserCorrect}>
          {isUserCorrect ? "Correct! 👏" : "Try Again 🚨"}
        </UserIndication>
      )}
    </StyledOptionsPanel>
  );
};
