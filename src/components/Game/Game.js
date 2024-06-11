import { useState } from 'react';
import { FieldContainer } from './Field/Field';
import { InformationContainer } from './Information/Information';
import styles from './game.module.css';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const handleRestartClick = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	};
	return (
		<>
			<FieldContainer
				field={field}
				setField={setField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				isDraw={isDraw}
				setIsDraw={setIsDraw}
			/>
			<InformationContainer
				isDraw={isDraw}
				setIsDraw={setIsDraw}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
			/>
			<button
				className={styles['restart-btn']}
				onClick={() => handleRestartClick()}
			>
				Начать заново
			</button>
		</>
	);
};
