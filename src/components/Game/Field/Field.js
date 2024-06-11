import styles from './field.module.css';
import PropTypes from 'prop-types';

export const FieldContainer = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
}) => {
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
	const handleClickItem = (item, index, array) => {
		if (item === '' && !isGameEnded) {
			array[index] = currentPlayer;
		}
		for (const combination of WIN_PATTERNS) {
			if (
				field[combination[0]] === field[combination[1]] &&
				field[combination[1]] === field[combination[2]] &&
				field[combination[0]] !== ''
			) {
				setIsGameEnded(true);
				setCurrentPlayer(field[combination[0]]);
				return;
			}
		}
		if (!array.includes('') && !isGameEnded) {
			return setIsDraw(true);
		}
		if (!isGameEnded && array.includes('')) {
			return setCurrentPlayer(() => (currentPlayer === 'X' ? '0' : 'X'));
		}
	};

	return (
		<FieldLayout
			field={field}
			setField={setField}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			handleClickItem={handleClickItem}
		/>
	);
};
export const FieldLayout = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
	handleClickItem,
}) => {
	const createField = field.map((item, index, array) => {
		return (
			<div
				key={index}
				className={styles.cell}
				onClick={() => handleClickItem(item, index, array)}
			>
				<p className={array[index] === 'X' ? styles['x'] : styles['o']}>
					{item}
				</p>
			</div>
		);
	});

	return <div className={styles.board}>{createField}</div>;
};
FieldLayout.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	setCurrentPlayer: PropTypes.func.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	setIsGameEnded: PropTypes.func.isRequired,
	isDraw: PropTypes.bool.isRequired,
	setIsDraw: PropTypes.func.isRequired,
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	setField: PropTypes.func.isRequired,
};
