// api
var APIKey = '139c5b4ec174b91d992a568573d90815';
var queryURL =  'https://api.openweathermap.org/data/2.5/';
// var elements
var inputEl = $('#input');
var buttonEl = $('#button');
var WeatherCast = $('#info');
var forecastIn = $('#forecast');
var history = $('#archive');
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
   archiveCity();
   refer();

if(archive.indexOf(city)=== -1){

  archive.push(city)

 window.localStorage.setItem('archive',JSON.stringify(archive));
}


  console.log(city);
};
// display previous searches
function archiveCity(archive){
  var archive = JSON.parse(window.localStorage.getItem('archive')) || [];
  var specify = archive.sort(); 
  var history = $('#archive');

  var create = $(document.createElement('a'));
  create.addClass('box has-background-info');
  create.text(`${specify}`)
  history.append(create);
  
  console.log(specify);
}
function refer(){
$('.archive').on("click", "a", function(){
  cityLocal($(this).text());


})
console.log()
}
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
    .then((data) =>{

     updateScreen(data)
     fiveDayForecast(data.daily)
    console.log(data);
    })
  }


    // fetch function
   function updateScreen(data){
     WeatherCast.empty();
     console.log(data);
    WeatherCast.append(`
       <div class="box has-background-primary is-5">
       <h4 class="size-3"> ${city} </h4>
       <h2'> ${moment().format("MM,DD,YYYY")}</h2>
       <img src = https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png>
       <p> Temp: ${data.current.temp} F </p>
       <p> Wind: ${data.current.wind_speed} Mph </p>
       <p> Humidity: ${data.current.humidity} </p>
       <p> UV: ${data.current.uvi} </p>
       </div>



    `)
   }

  function fiveDayForecast(data){
  console.log(data);
  for (i=0;i<days;i++){
  var futuredays = moment().add(days);
  forecastIn.addClass('.box');
  forecastIn.append(`
  <div class="box ml-2 has-background-info-dark">
  <h2 class = "has-text-white-bis"> ${moment(futuredays[i]).format("MM,DD,YYYY")}</h2>
  <img src = https://openweathermap.org/img/wn/${data[i].weather[0].icon}@2x.png>
  <p class ="has-text-white-bis"> Temp: ${data[i].temp.day} F </p>
  <p class="has-text-white-bis"> Wind: ${data[i].wind_speed} Mph </p>
  <p class="has-text-white-bis"> Humidity: ${data[i].humidity} </p>
  </div>


  
  `)
}




  

}


  buttonEl.on('click',citySubmit);