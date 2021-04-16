import { FC } from 'react';

interface SquareProps {
    value: string
    onClick: () => void
}

const Square:FC<SquareProps> = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
);

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: 800,
    cursor: 'pointer',
    outline: 'none'
};

export default Square;