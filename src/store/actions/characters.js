import { CHARACTERS_RECEIVED } from '../constants'
import { findAllCharacters } from '../../lib/api'

export const findAllCharactersAction = (page) => {
	return (dispatch) => {
		return findAllCharacters(page)
			.then(response => {
				if (response.code === 200) {
					const {
						count,
						total,
						offset,
						results
					} = response.data
					
					dispatch({
						type: CHARACTERS_RECEIVED,
						characters: results,
						total,
						count,
						offset		
					})
				}
			})
	}
}
