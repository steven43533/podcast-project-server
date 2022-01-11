require('dotenv').config()
const express = require('express')

const axios = require('axios')

const router = express.Router()
let configByPodcast = {
	method: 'GET',
	url: 'https://listen-api.listennotes.com/api/v2/search?q=revolutions&type=podcast',
	headers: {
		"X-ListenAPI-Key": `${process.env.API_KEY}`
	}
}
let configByGenre = {
	method: 'GET',
	url: 'https://listen-api.listennotes.com/api/v2/genres?top_level_only=1',
	headers: {
		"X-ListenAPI-Key": `${process.env.API_KEY}`
	}
}



router.get('/by-podcast', (req, res, next) => {
	axios(configByPodcast)
		.then(function(response) {
			console.log(res.json(response.data))
		})
		.catch(function (error){
			console.log(error);
		})
})
router.get('/by-genre', (req, res, next) => {
	axios(configByGenre)
		.then(function(response) {
			console.log(res.json(response.data))
		})
		.catch(function (error){
			console.log(error);
		})
})

module.exports = router
