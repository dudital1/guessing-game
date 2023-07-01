
import { StyledBoard } from "./Board.styles"

interface IBoardProps {
    currentRadomColor: string;
}

export const Board: React.FC<IBoardProps> = ({currentRadomColor}) => {
    return <StyledBoard backgroundColor={currentRadomColor} />
}