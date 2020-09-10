const  APIKEY = 'fac56b519b07deb5ef9fb997277bc730';
// call api with city as parameter
let appiCall = function(city) {
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fac56b519b07deb5ef9fb997277bc730&units=metric&lang=fr`;


fetch(url).then((response) =>
			response.json().then((data) =>{ 
				console.log(data);
				document.querySelector('#city').innerHTML = data.name;
				document.querySelector('#temp').innerHTML = 
				"<i class='fas fa-termometer-half'></i>" + data.main.temp +'°C';
				document.querySelector('#humidity').innerHTML = 
				"<i class='fas fa-tint'></i>" + data.main.humidity + '%';
				document.querySelector('#wind').innerHTML = 
				"<i class='fas fa-wind'></i>" + data.wind.speed + 'km/h';
				})
			)
		
	.catch((err) => console.log('Erreur:' + err));
	
}
document.querySelector('form').addEventListener('submit', function(e) {
e.preventDefault();
let ville = document.querySelector('#inputCity').value;
	appiCall(ville);

			});
//default call
appiCall('Garoua');
