async function getData() {
	const city = document.getElementById("input-box").value;
	
	const degree = "&deg;C";
	const percentage = "%";
	const m= "m/h";

	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
	const query = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '3460ade1efmsh597ccc5b6ce1e07p14573fjsnefba74dfb616',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	}
	
	try {
		const response = await fetch(url, query);
		const result = await response.json();
		console.log(result);

		/*document.getElementById("city").innerHTML = city;*/

		document.getElementById("temp").innerHTML = result.temp;
        document.getElementById("max_temp").innerHTML = result.max_temp;
        document.getElementById("min_temp").innerHTML = result.min_temp;

		document.getElementById("humidity").innerHTML = result.humidity;
        document.getElementById("feels_like").innerHTML = result.feels_like;
		
        document.getElementById("wind_degrees").innerHTML = result.wind_degrees;
        document.getElementById("wind_speed").innerHTML = result.wind_speed


	} catch (error) {
		console.error(error);
	}
}