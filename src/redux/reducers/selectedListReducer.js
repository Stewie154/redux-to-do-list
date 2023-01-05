import { SELECT_LIST, DESELECT_LIST, CREATE_LIST_ITEM, DELETE_LIST_ITEM, TOGGLE_LIST_ITEM } from '../actions/types'

export default (state = null, action) => {
	switch (action.type) {
		case SELECT_LIST:
			return action.payload
		case DESELECT_LIST:
			return null
		case CREATE_LIST_ITEM:
			return {...state, items: [...state.items, action.payload]}
		case DELETE_LIST_ITEM:
			let updatedItems = state.items.filter(item => item.id !== action.payload)
			return {...state, items: updatedItems}
		case TOGGLE_LIST_ITEM:
			let toggled = state.items.map(item => {
				if (item.id === action.payload) {
					item.completed = !item.completed
					return item
				}
				else {
					return item
				}
			})
			return {...state, items: toggled}
		default:
			return state
	}
}