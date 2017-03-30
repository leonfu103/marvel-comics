import React from 'react'
import { ListItem } from './ListItem'
import './style.css'

const renderEntity = (type) => {
	return (entity, i) => {
		return (
			<ListItem {...entity} key={i} type={type} />
		)
	}
}

export const EntityList = ({
	entities,
	total,
	count,
	offset,
	type
}) => {
	return (
		<div className='EntitiesList'>
			{entities.map(renderEntity(type))}
		</div>
	)
}