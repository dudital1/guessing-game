import styled from "styled-components";
import { Button } from "../../../../design-system/Button/Button";
import { Flex, FlexColumn } from "../../../../design-system/Flex/Flex";
import { H6 } from "../../../../design-system/Typography/Typography";

export const StyledOptionsPanel = styled(FlexColumn)`
    gap: 1rem;;
`;

export const OptionsWrapper = styled(Flex)`
  width: 400px;
  justify-content: space-around;
`;

export const OptionButton = styled(Button)`
  width: 125px;
`;

export const UserIndication = styled(H6)<{isCorrect: boolean}>`
    color: ${({ isCorrect }) => isCorrect ? "green" : "red" };
    align-self: center;
`;