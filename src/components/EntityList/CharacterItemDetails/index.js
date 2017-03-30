import React from 'react'
import '../style.css'

export const CharacterItemDetails = (item) => {
	const {
		thumbnail,
		name,
		description,
		id,
		series
	} = item
	console.log('item', item)
	const imageUrl = [thumbnail.path, thumbnail.extension].join('.')
	const seriesList = series.items.map((item) => {
		return (
			<li>{item.name}</li>
		)
	})

	return (
		<div className='ItemDetails'>
			<div className='ItemDetails__img'>
				<img src={imageUrl} alt={name}/>
			</div>
			<div className='ItemDetails__detail'>
				<table>
					<tbody>
						<tr>
							<td>Name:</td>
							<td className='TableRow__value'>{name}</td>
						</tr>
						<tr>
							<td>Description:</td>
							<td className='TableRow__value'>{description}</td>
						</tr>
						<tr>
							<td>ID:</td>
							<td className='TableRow__value'>{id}</td>
						</tr>
						<tr>
							<td>Series:</td>
							<td className='TableRow__value'>
								{seriesList}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}