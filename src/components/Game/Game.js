import React, { useState, useEffect } from 'react';
import { FieldContainer } from './Field/Field';
import { InformationContainer } from './Information/Information';
import styles from './game.module.css';
import { store } from '../../store';

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
		if (state.field) {
			store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'X' });
			store.dispatch({ type: 'SET_GAME_ENDED', payload: false });
			store.dispatch({ type: 'SET_DRAW', payload: false });
			store.dispatch({
				type: 'SET_FIELD',
				payload: ['', '', '', '', '', '', '', '', ''],
			});
		}
	};

	return (
		<>
			<FieldContainer
				field={state.field}
				setField={(field) =>
					store.dispatch({ type: 'SET_FIELD', payload: field })
				}
				currentPlayer={state.currentPlayer}
				setCurrentPlayer={(player) =>
					store.dispatch({
						type: 'SET_CURRENT_PLAYER',
						payload: player,
					})
				}
				isGameEnded={state.isGameEnded}
				setIsGameEnded={(isEnded) =>
					store.dispatch({ type: 'SET_GAME_ENDED', payload: isEnded })
				}
				isDraw={state.isDraw}
				setIsDraw={(isDraw) =>
					store.dispatch({ type: 'SET_DRAW', payload: isDraw })
				}
			/>
			<InformationContainer
				isDraw={state.isDraw}
				currentPlayer={state.currentPlayer}
				isGameEnded={state.isGameEnded}
			/>
			<button
				className={styles['restart-btn']}
				onClick={handleRestartClick}
			>
				Начать заново
			</button>
		</>
	);
};
