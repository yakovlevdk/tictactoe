
const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: ['', '', '', '', '', '', '', '', ''],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CURRENT_PLAYER':
			return { ...state, currentPlayer: action.payload };
		case 'SET_FIELD':
			return { ...state, field: action.payload };
		case 'SET_GAME_ENDED':
			return { ...state, isGameEnded: action.payload };
		case 'SET_DRAW':
			return { ...state, isDraw: action.payload };
		case 'RESET':
			return initialState;
		default:
			return state;
	}
};
