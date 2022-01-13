require('dotenv').config()
const express = require('express')
const axios = require('axios')
const router = express.Router()

let configByGenre = {
	method: 'GET',
	url: 'https://listen-api.listennotes.com/api/v2/genres?top_level_only=1',
	headers: {
		"X-ListenAPI-Key": `${process.env.API_KEY}`
	}
}

router.get('/by-genre', (req, res) => {
	axios(configByGenre)
		.then(function(response) {
			res.json(response.data)
		})
		.catch(function (error){
			console.log(error);
		})
})



router.get('/', (req, res) => {
	let {query} = req
	const listenNotesURL = `https://listen-api.listennotes.com/api/v2/search?q=${query.searchTerm}&type=podcast`
	axios(listenNotesURL, {
		headers: {
			"X-ListenAPI-Key": `${process.env.API_KEY}`
		}
	})
		.then(function(response) {
			res.json(response.data)
		})
		.catch(function (error){
			console.log(error);
		})
})

router.get('/podcasts/:id', (req, res) => {
	const listenNotesURL = `https://listen-api.listennotes.com/api/v2/podcasts/${req.params.id}`
	axios(listenNotesURL, {
		headers: {
			"X-ListenAPI-Key": `${process.env.API_KEY}`
		}
	})
	.then(function(response) {
		res.json(response.data)
	})
	.catch(function (error){
		console.log(error);
	})
})










module.exports = router
