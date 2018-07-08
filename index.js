const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request-promise');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	
	// Define params
	var options = {
		url: 'https://api.yelp.com/v3/businesses/search',
		method: 'GET',
		qs: {
    		location: 'Berkeley'
  		},
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer [API_KEY]'
		},
		json: true
	};

	request(options)
		.then((yelpDataReturned) => {
			restaurants = yelpDataReturned.businesses;
			restaurants.forEach((restaurant) => {
				console.log(restaurant.name);
			});
			res.send(restaurants);
		})
		.catch((err) => {
			console.log('error:', err);
			res.send('error');
		}); 

})

// Creates a server.
app.listen(1400, (req, res) => {
	console.log('server is listening at port 1400.');
});
