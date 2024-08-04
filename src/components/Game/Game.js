import React from 'react';
import { FieldContainer } from './Field/Field';
import { InformationContainer } from './Information/Information';
import styles from './game.module.css';
import { store } from '../../store';

export const Game = () => {
	const handleRestartClick = () => {
		store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'X' });
		store.dispatch({ type: 'SET_GAME_ENDED', payload: false });
		store.dispatch({ type: 'SET_DRAW', payload: false });
		store.dispatch({
			type: 'SET_FIELD',
			payload: ['', '', '', '', '', '', '', '', ''],
		});
	};

	return (
		<>
			<FieldContainer />
			<InformationContainer />
			<button
				className={styles['restart-btn']}
				onClick={handleRestartClick}
			>
				Начать заново
			</button>
		</>
	);
};
