import React from 'react';
import { FieldContainer } from './Field/Field';
import { InformationContainer } from './Information/Information';
import styles from './game.module.css';
import { useDispatch } from 'react-redux';
import { reset } from '../../action/reset';
export const Game = () => {
	const dispatch = useDispatch();
	const handleRestartClick = () => {
		dispatch(reset);
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
