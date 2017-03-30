import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findAllCharactersAction } from '../../store/actions/characters'
import { EntityList } from '../EntityList'

const mapState = ({
	charactersData
}) => ({
	charactersData
})

const mapDispatch = (dispatch) => ({
	findAllCharacters (page) {
		dispatch(findAllCharactersAction(page))
	}
})

export class CharactersContainer extends Component {
	componentWillMount () {
		this.props.findAllCharacters(1)
	}

	render () {
		const {
			charactersData: {
				characters,
				total,
				count,
				offset
			}
		} = this.props

		if (characters) {
			return (
				<div>
					<EntityList
						entities={characters}
						total={total}
						count={count}
						offset={offset}
						type='characters' />
				</div>
			)			
		} else {
			return (
				<div>
					Loading characters ...
				</div>
			)			
		}
	} 
}

CharactersContainer.propTypes = {
	charactersData: React.PropTypes.object
}

CharactersContainer.defaultProps = {
	charactersData: {}
}

export default connect(mapState, mapDispatch)(CharactersContainer)
