const url = 'https://open-weather13.p.rapidapi.com/city/Johannesburg';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b0599da7eamsh98649367c96cc53p1971f0jsn425ad2a1574a',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}