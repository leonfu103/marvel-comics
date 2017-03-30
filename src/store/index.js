import reducer from './reducers'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const createStoreWithMiddleware = compose(
	applyMiddleware(thunk)
)(createStore)

export default (initialState = {}) => (
	createStoreWithMiddleware(reducer, initialState)
)
