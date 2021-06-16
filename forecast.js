// api
var APIKey = '139c5b4ec174b91d992a568573d90815';
var queryURL =  'https://api.openweathermap.org/data/2.5/';
// var elements
var inputEl = $('#input');
var buttonEl = $('#button');
var WeatherCast = $('#info');
var forecastIn = $('#forecast');
//cataloging
var city;
var days = 5;
var cityValue;
var archive = JSON.parse(window.localStorage.getItem('archive')) || [];
var emptyData = function(){

}

// take the input from the search bar
var citySubmit = function(){

  city = inputEl.val();
    cityLocal();
    getWeatherData();

if(archive.indexOf(city)=== -1){

  archive.push(city)

 window.localStorage.setItem('archive',JSON.stringify(archive));
}


  console.log(city);
};


// use this to get the city results
var cityLocal = function(city){

    city = inputEl.val();

  var cityApi = `${queryURL}weather?q=${city}&APPID=${APIKey}&units=imperial`;
   fetch (cityApi)
   .then(function(response){
        return response.json();

   })
  .then(function(data){
    console.log(data);
  })
}

  var getWeatherData = function(lat,lon){
      var oneCall = `${queryURL}onecall?lat=${lat}&lon=${lon}&APPID=${APIKey}&units=imperial`;
    fetch(oneCall) 
    // this alllows data to be configured to json
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      var lat = `${data.coord.lat}`;
      var lon = `${data.coord.lon}`;
      cityLocal(lat,lon);
      console.log(lat,lon);
      console.log(data);
    })
  }


    // fetch function
    function handle_geolocation_query(data){  
      lat = (data.coord.lat);
      lon = (data.coord.lon); 
      console.log(lat,lon);
    };
  


  // Creating the data points but i dont know if they work
  // WeatherCast.empty();
  // forecastIn.empty();
  var addCard = $('<div>').addClass('box has-background-black');
  var addHead = $('<h2>').addClass('is-size-3').text(moment().format("MM,DD,YYYY")) ;
  // // var addImg = $('<img>').attr(`src = https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` )
  // var addTemp = $('<p>').text(`Temp: ${data.main.temp} F`);
  // var addWind = $('<p>').text(`Wind: ${data.wind.sped} Mph`);
  // var addHumid = $('<p>').text(`Humidity: ${data.main.humidity}`);
  // var addUv = $('<p>').text(`UV: ${data.UV}`);


  // append 
function weatherPush() {
  WeatherCast.empty();
  getWeatherData();
  WeatherCast.append(
  addCard,
  addHead
  )
  console.log(weatherPush());
};
// 5 day forecast

var fiveDayForecast = function(){
for (i=0;i<days;i++){
  forecastIn.addClass('.box');
  forecastIn.append(`



  
  `)}




  
console.log(fiveDayForecast);
}


  buttonEl.on('click',citySubmit);