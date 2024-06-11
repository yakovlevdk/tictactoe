import styles from './information.module.css';
import PropTypes from 'prop-types';

export const InformationContainer = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
}) => {
	return (
		<InformationLayout
			field={field}
			setField={setField}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
		/>
	);
};

export const InformationLayout = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
}) => {
	const information = ({
		field,
		setField,
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw,
	}) => {
		if (isDraw === true) {
			return 'Ничья';
		} else if (isDraw === false && isGameEnded === true) {
			return `Победа: ${currentPlayer}`;
		} else if (isDraw === false && isGameEnded === false) {
			return `Ходит: ${currentPlayer}`;
		}
	};
	return (
		<div className={styles.information}>
			<p>
				Статус:{' '}
				<span>
					{information({
						field,
						setField,
						currentPlayer,
						setCurrentPlayer,
						isGameEnded,
						setIsGameEnded,
						isDraw,
						setIsDraw,
					})}
				</span>
			</p>
		</div>
	);
};
InformationLayout.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	setCurrentPlayer: PropTypes.func.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	setIsGameEnded: PropTypes.func.isRequired,
	isDraw: PropTypes.bool.isRequired,
	setIsDraw: PropTypes.func.isRequired,
};
