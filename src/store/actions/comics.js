import { COMICS_RECEIVED } from '../constants'
import { findAllComicsByParams } from '../../lib/api'

export const findAllComicsByPage = (page, characters, series) => {
	return (dispatch) => {
		return findAllComicsByParams(page, characters, series)
			.then(response => {
				if (response.code === 200) {
					const {
						count,
						total,
						offset,
						results
					} = response.data
					
					dispatch({
						type: COMICS_RECEIVED,
						comics: results,
						total,
						count,
						offset		
					})
				}
			})
	}
}
