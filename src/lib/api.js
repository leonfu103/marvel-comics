require('es6-promise').polyfill()
require('isomorphic-fetch')
import crypto from 'crypto'

const publicKey = 'f8be6eb02d7cb0ad2e249ad1b6cc81f0'
const privateKey = '24a0e3d87502a09a0a9a3b2d3071fa8b6b3e808a'

const timestamp = parseInt(Date.now() / 1000, 10)
const hash = crypto.createHash('md5').update(timestamp + privateKey + publicKey).digest('hex')
const HOST_URL = 'http://gateway.marvel.com'

export const findAllComicsByParams = (page = 1, characters = [], series = []) => {
	var url = `${HOST_URL}/v1/public/comics?limit=20&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
	if (characters.length > 0) url += '&characters=' + escape(characters)
	if (series.length > 0) url += '&series=' + escape(series)

	return fetch(
		url
	)
	.then(response => response.json())
	.then(result => result)
}

export const findAllCharacters = (page = 1) => {
	var url = `${HOST_URL}/v1/public/characters?limit=20&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
	
	return fetch(
		url
	)
	.then(response => response.json())
	.then(result => result)
}
