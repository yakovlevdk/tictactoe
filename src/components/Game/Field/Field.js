import React from 'react';
import styles from './field.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { currentPlayerSelector } from '../../../selectors/currentPlayerSelector';
import { fieldSelector } from '../../../selectors/fieldSelector';
import { isGameEndedSelector } from '../../../selectors/isGameEndedSelector';
import { setField } from '../../../action/setField';
import { setGameEnded } from '../../../action/setGameEnded';
import { setCurrentPlayer } from '../../../action/setCurrentPlayer';
import { setDraw } from '../../../action/setDraw';
export const FieldContainer = () => {
	const dispatch = useDispatch();
	const field = useSelector(fieldSelector);
	const isGameEnded = useSelector(isGameEndedSelector);
	const currentPlayer = useSelector(currentPlayerSelector);

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
		if (field[index] === '' && !isGameEnded) {
			const newField = [...field];
			newField[index] = currentPlayer;
			dispatch(setField(newField));

			for (const combination of WIN_PATTERNS) {
				if (
					newField[combination[0]] === newField[combination[1]] &&
					newField[combination[1]] === newField[combination[2]] &&
					newField[combination[0]] !== ''
				) {
					dispatch(setGameEnded);
					dispatch(setCurrentPlayer(newField[combination[0]]));
					return;
				}
			}

			if (!newField.includes('') && !isGameEnded) {
				dispatch(setDraw);
			} else if (!isGameEnded && newField.includes('')) {
				dispatch(setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'));
			}
		}
	};

	return <FieldLayout field={field} handleClickItem={handleClickItem} />;
};

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
