export default function(state = null, action) {
	switch(action.type) {
	case 'BOOK_SELECTED':
		return action.payload;
	}

	// when we dont care about the action:
	return state;
}