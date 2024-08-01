async function getData() {
	const city = document.getElementById("input-box").value;
	
	const degree = "&deg;C";
	const percentage = "%";
	const m= "m/h";

	const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + city;
	const query = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '3460ade1efmsh597ccc5b6ce1e07p14573fjsnefba74dfb616',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	}
	
	try {
		const response = await fetch(url, query);
		const result = await response.json();
		console.log(result);

		/*document.getElementById("city").innerHTML = city;*/

		document.getElementById("temp").innerHTML = "- " + result.current.temp_c + " °C";
        document.getElementById("max_temp").innerHTML = "- " + result.forecast.forecastday[0].day.maxtemp_c + " °C";
        document.getElementById("min_temp").innerHTML = "- " + result.forecast.forecastday[0].day.mintemp_c + " °C";

		document.getElementById("humidity").innerHTML = "- " + result.current.humidity + " %";
        document.getElementById("feels_like").innerHTML = "- " + result.current.feelslike_c + " °C";
		
        document.getElementById("wind_degrees").innerHTML =  "- " + result.current.wind_degree + " °";
        document.getElementById("wind_speed").innerHTML =  "- " + result.current.wind_mph + " m/s";


	} catch (error) {
		console.error(error);
	}
}
