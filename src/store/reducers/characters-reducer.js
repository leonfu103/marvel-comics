import { CHARACTERS_RECEIVED } from '../constants'
import { pick } from 'lodash'

export default (state = {}, action) => {
	switch (action.type) {
		case CHARACTERS_RECEIVED:
			return pick(action, ['characters', 'total', 'count', 'offset'])
		default:
			return state
	}
}
