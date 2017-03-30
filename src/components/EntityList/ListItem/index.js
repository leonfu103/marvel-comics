import React, { Component } from 'react'
import './style.css'
import { ComicsItemDetails } from '../ComicsItemDetails'
import { CharacterItemDetails } from '../CharacterItemDetails'
import { OverlayModal } from '../../OverlayModal'

export class ListItem extends Component {
	constructor (props) {
		super(props)
		this.state = { showModal: false }

		this.onImageClick = this.onImageClick.bind(this)
		this.renderItemDetails = this.renderItemDetails.bind(this)
		this.onCloseOverlayModal = this.onCloseOverlayModal.bind(this)
	}

	onImageClick () {
		this.setState({
			showModal: true
		})
	}

	onCloseOverlayModal () {
		this.setState({
			showModal: false
		})
	}

	renderItemDetails () {
		const Component = this.props.type === 'comics' ? ComicsItemDetails : CharacterItemDetails

		if (this.state.showModal) {
			return (
				<OverlayModal onClose={this.onCloseOverlayModal}>
					<Component {...this.props} />
				</OverlayModal>
			)
		} else {
			return null
		}
	}

	render () {
		const {
			thumbnail,
			title,
			name,
			id
		} = this.props
		const thumbnailUrl = [thumbnail.path, thumbnail.extension].join('.')

		return (
			<div className='ListItem' key={id}>
				<img src={thumbnailUrl} alt={title} onClick={this.onImageClick} />
				<p>{title || name}</p>
				{ this.renderItemDetails() }
			</div>
		)		
	}
}