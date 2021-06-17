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
   .then(response => response.json())
   .then(data => getWeatherData(data.coord.lat,data.coord.lon));
}

  var getWeatherData = function(lat,lon){
      var oneCall = `${queryURL}onecall?lat=${lat}&lon=${lon}&APPID=${APIKey}&units=imperial`;
    fetch(oneCall) 
    // this alllows data to be configured to json
    .then(response => response.json())
    .then(data => updateScreen(data))
  }


    // fetch function
   function updateScreen(data){
     inputEl.empty();
     console.log(data);
    inputEl.append(`
       <div box>;
       <h2'is-size-3>(${moment().format("MM,DD,YYYY")}) ;
       <img src = https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png>
       <p> Temp: ${data.current.temp} F </p>
       <p> Wind: ${data.current.wind_speed} Mph </p>
       <p> Humidity: ${data.current.humidity} </p>
       <p> UV: ${data.current.uvi} </p>
       </div>


       <h5 is-size-4> next 5-days:</h5>

    `)
   }
  


  // Creating the data points but i dont know if they work
  // WeatherCast.empty();
  // forecastIn.empty();


// 5 day forecast

var fiveDayForecast = function(){
for (i=0;i<days;i++){
  forecastIn.addClass('.box');
  forecastIn.append(`



  
  `)}




  
console.log(fiveDayForecast);
}


  buttonEl.on('click',citySubmit);