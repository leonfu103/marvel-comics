import React, { Component } from 'react'
import Modal from 'react-modal'

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

export class OverlayModal extends Component {
	constructor (props) {
		super(props)
		this.state = {
			modalIsOpen: true
		}

		this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
	} 

	openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    const onClose = this.props.onClose

    this.setState({modalIsOpen: false});
    onClose && onClose()
  }

	render () {
		return (
			<div>
				<Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Overlay Modal">
          {this.props.children}
        </Modal>
			</div>
		)			
	} 
}
