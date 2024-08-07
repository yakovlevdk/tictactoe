import styles from './information.module.css';

export const InformationContainer = ({ state }) => {
	const information = () => {
		if (state.isDraw) {
			return 'Ничья';
		} else if (!state.isDraw && state.isGameEnded) {
			return `Победа: ${state.currentPlayer}`;
		} else {
			return `Ходит: ${state.currentPlayer}`;
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
