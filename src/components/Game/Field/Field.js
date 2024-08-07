import styles from './field.module.css';
import { store } from '../../../store';

export const FieldContainer = ({ state }) => {
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];

	const handleClickItem = (index) => {
		if (state.field[index] === '' && !state.isGameEnded) {
			const newField = [...state.field];
			newField[index] = state.currentPlayer;
			store.dispatch({ type: 'SET_FIELD', payload: newField });

			for (const combination of WIN_PATTERNS) {
				if (
					newField[combination[0]] === newField[combination[1]] &&
					newField[combination[1]] === newField[combination[2]] &&
					newField[combination[0]] !== ''
				) {
					store.dispatch({ type: 'SET_GAME_ENDED', payload: true });
					store.dispatch({
						type: 'SET_CURRENT_PLAYER',
						payload: newField[combination[0]],
					});
					return;
				}
			}

			if (!newField.includes('') && !state.isGameEnded) {
				store.dispatch({ type: 'SET_DRAW', payload: true });
			} else if (!state.isGameEnded && newField.includes('')) {
				store.dispatch({
					type: 'SET_CURRENT_PLAYER',
					payload: state.currentPlayer === 'X' ? 'O' : 'X',
				});
			}
		}
	};

	return (
		<FieldLayout field={state.field} handleClickItem={handleClickItem} />
	);
};

// FieldLayout.js
export const FieldLayout = ({ field, handleClickItem }) => {
	return (
		<div className={styles.board}>
			{field.map((item, index) => (
				<div
					key={index}
					className={styles.cell}
					onClick={() => handleClickItem(index)}
				>
					<p className={item === 'X' ? styles['x'] : styles['o']}>
						{item}
					</p>
				</div>
			))}
		</div>
	);
};
