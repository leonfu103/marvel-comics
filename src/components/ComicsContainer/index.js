import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findAllComicsByPage } from '../../store/actions/comics'
import { EntityList } from '../EntityList'
import { Filter } from '../Filter'

const mapState = ({
	comicsData
}) => ({
	comicsData
})

const mapDispatch = (dispatch) => ({
	findAllComics (page, characters = [], series = []) {
		dispatch(findAllComicsByPage(page, characters, series))
	}
})

export class ComicsContainer extends Component {
	constructor (props) {
		super(props)

		this.onSubmit = this.onSubmit.bind(this)
	} 

	componentWillMount () {
		this.props.findAllComics(1)
	}

	onSubmit (form) {
		const {
			characters,
			series
		} = form
		const findAllComics = this.props.findAllComics
		const arrayOfCharacters = !!characters ? characters.split(',') : []
		const arrayOfSeries = !!series ? series.split(',') : []

		findAllComics && findAllComics(1, arrayOfCharacters, arrayOfSeries)
	}

	render () {
		const {
			comicsData: {
				comics,
				total,
				count,
				offset
			}
		} = this.props

		if (comics) {
			return (
				<div>
					<Filter
						fieldNames={['characters', 'series']}
						onSubmit={this.onSubmit} />
					<EntityList
						entities={comics}
						total={total}
						count={count}
						offset={offset} 
						type='comics' />
				</div>
			)			
		} else {
			return (
				<div>
					Loading comics ...
				</div>
			)			
		}
	} 
}

ComicsContainer.propTypes = {
	comicsData: React.PropTypes.object
}

ComicsContainer.defaultProps = {
	comicsData: {}
}

export default connect(mapState, mapDispatch)(ComicsContainer)
