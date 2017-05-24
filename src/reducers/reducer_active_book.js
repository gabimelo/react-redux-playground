export default function(state = null, action) {
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
		default:
			// when we dont care about the action:
			return state;
	}

}