import React from 'react';
import styles from './information.module.css';
import { useSelector } from 'react-redux';
import { isDrawSelector } from '../../../selectors/isDrawSelector';
import { currentPlayerSelector } from '../../../selectors/currentPlayerSelector';
import { isGameEndedSelector } from '../../../selectors/isGameEndedSelector';
export const InformationContainer = () => {
	const isDraw = useSelector(isDrawSelector);
	const isGameEnded = useSelector(isGameEndedSelector);
	const currentPlayer = useSelector(currentPlayerSelector);

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
