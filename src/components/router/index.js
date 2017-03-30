import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import App from '../App'
import Comics from '../ComicsContainer'
import Characters from '../CharactersContainer'

export default (
	<Route path='/' component={App}>
    <IndexRedirect to='comics' />

    <Route path='comics' component={Comics} />
    <Route path='characters' component={Characters} />
  </Route>
)
