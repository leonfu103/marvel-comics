import React from 'react'
import '../style.css'

export const ComicsItemDetails = (item) => {
	const {
		images,
		title,
		prices,
		description,
		pageCount,
		series
	} = item
	const imageUrl = images.length > 0 ? [images[0].path, images[0].extension].join('.') : ''
	const price = prices.length > 0 && prices[0].price

	return (
		<div className='ItemDetails'>
			<div className='ItemDetails__img'>
				<img src={imageUrl} alt={title}/>
			</div>
			<div className='ItemDetails__detail'>
				<table>
					<tbody>
						<tr>
							<td>Title:</td>
							<td className='TableRow__value'>{title}</td>
						</tr>
						<tr>
							<td>Description:</td>
							<td className='TableRow__value'>{description}</td>
						</tr>
						<tr>
							<td>Page Count:</td>
							<td className='TableRow__value'>{pageCount}</td>
						</tr>
						<tr>
							<td>Series:</td>
							<td className='TableRow__value'>{series.name}</td>
						</tr>
						<tr>
							<td>Price:</td>
							<td className='TableRow__value'>${price}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}