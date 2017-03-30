import React, { Component } from 'react';
import './style.css'

export class Filter extends Component {
	constructor (props) {
		super(props)
    this.state = {}

		this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
	}

	onChange (e) {
		e.preventDefault()

		const {
			name,
			value
		} = e.target

    this.setState({
      [name]: value
    })
	}

  handleSubmit (e) {
    e.preventDefault()

    this.props.onSubmit(this.state)
  }

  render () {
  	const {
  		fieldNames
  	} = this.props

  	const fieldInputs = fieldNames.map((name, index) => {
  		return (
  			<input
          className='Filter__input'
          key={index}
      		type='text' 
      		value={this.state.name} 
      		placeholder={name.toUpperCase()}
      		name={name} 
      		onChange={this.onChange} />
  		)
  	})

  	return (
  		<div className="Filter">
  			<form className='Filter' onSubmit={this.handleSubmit}>
  			{fieldInputs}
        <input
          className='Filter__button'
          type='submit'
          onSubmit={this.handleSubmit}
          value='Filter' />
      </form>
  		</div>
  	)
  }
}

Filter.propTypes = {
	fieldNames: React.PropTypes.array,
	onSubmit: React.PropTypes.func.isRequired
}

Filter.defaultProps = {
	fieldNames: []
}
