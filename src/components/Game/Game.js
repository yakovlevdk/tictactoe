import React, { useState } from 'react';
import { FieldContainer } from './Field/Field';
import { InformationContainer } from './Information/Information';
import styles from './game.module.css';
import { store } from '../../store';
import { useEffect } from 'react';
export const Game = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const handleRestartClick = () => {
		store.dispatch({ type: 'RESET' });
	};

	return (
		<>
			<FieldContainer state={state} />
			<InformationContainer state={state} />
			<button
				className={styles['restart-btn']}
				onClick={handleRestartClick}
			>
				Начать заново
			</button>
		</>
	);
};
