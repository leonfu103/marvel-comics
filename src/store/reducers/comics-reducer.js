import { COMICS_RECEIVED } from '../constants'
import { pick } from 'lodash'

export default (state = {}, action) => {
	switch (action.type) {
		case COMICS_RECEIVED:
			return pick(action, ['comics', 'total', 'count', 'offset'])
		default:
			return state
	}
}
