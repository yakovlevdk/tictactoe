import React from 'react';
import styles from './information.module.css';

export const InformationContainer = ({
	isDraw,
	isGameEnded,
	currentPlayer,
}) => {
	const information = () => {
		if (isDraw) {
			return 'Ничья';
		} else if (!isDraw && isGameEnded) {
			return `Победа: ${currentPlayer}`;
		} else {
			return `Ходит: ${currentPlayer}`;
		}
	};

	return (
		<div className={styles.information}>
			<p>
				Статус: <span>{information()}</span>
			</p>
		</div>
	);
};
