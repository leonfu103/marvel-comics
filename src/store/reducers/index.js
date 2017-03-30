import { combineReducers } from 'redux'
import comicsReducer from './comics-reducer'
import charactersReducer from './characters-reducer'

export default combineReducers({
	comicsData: comicsReducer,
	charactersData: charactersReducer
})