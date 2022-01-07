require('dotenv').config()
const express = require('express')

const axios = require('axios')

const router = express.Router()
var config = {
	method: 'GET',
	url: 'https://listen-api.listennotes.com/api/v2/search?q=low%society&type=podcast',
	headers: {
		"X-ListenAPI-Key": `${process.env.API_KEY}`
	}
}

router.get('/', (req, res, next) => {
	axios(config)
		.then(function(response) {
			console.log(res.json(response.data))
		})
		.catch(function (error){
			console.log(error);
		})
})

module.exports = router
