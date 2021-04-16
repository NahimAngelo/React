import { FC, useState } from 'react';
import { calculateWinner } from '../utils/helpers';
import Board from '../components/Board';
import NavBar from '../components/NavBar';

const Game: FC = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = (i: number) => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];
        if (winner || squares[i]) return;
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);        
        setXisNext(!xIsNext);
    }

    const jumpTo = (step: number) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0)
    };

    const renderMoves = () => (
        history.map((_step, move: number) => {
            const destination = move ? `Go to move#${move}` : 'Go to start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })        
    )

    return (
        <>
            <NavBar index={1} />
            <br/>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div style={styles}>
                <p>{
                    (!winner && stepNumber === 9) ? 'No winner, tie' :
                    winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')
                }</p>
                {renderMoves()}
            </div>
        </>
    )
}

const styles = {
    width: '200px',
    margin: '20px auto',
};

export default Game;