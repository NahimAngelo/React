import { FC } from 'react';
import Square from './Square';

interface BoardProps {
    squares: object[]
    onClick: (i: number) => void
}

const Board:FC<BoardProps> = ({ squares, onClick }) => (
    <div style={style}>
        {squares.map((square: any, i: number) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
);

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

export default Board;