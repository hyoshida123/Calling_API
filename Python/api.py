import requests

headers = {
    'Content-Type': 'application/json',
	'Authorization': 'Bearer [API_KEY]'
};

params = {'location': 'Berkeley'};
r = requests.get('https://api.yelp.com/v3/businesses/search', params=params, headers=headers);

restaurants = r.json()['businesses'];

for restaurant in restaurants:
	print(restaurant['name']);