var city;
var APIKey = '139c5b4ec174b91d992a568573d90815';
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var inputEl = $('#input');
var contentEl = $('#cityMemory');
var cityInfo = $('#info');
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// remember location.replace


// print the search results

var printSkills = function (city) {
    var listEl = $('<td>');
    var listDetail = city;
    listEl.addClass('list-group-item').text(listDetail);
    listEl.addClass('box');
    listEl.appendTo(contentEl);

    console.log(listEl);
    console.log(listDetail);
    console.log(city);
  };
  
  var handleFormSubmit = function (event) {
    event.preventDefault();
  
    var nameInput = InputEl.val();
  
    if (!nameInput) {
      alert('Please input a city!');
      return;
    }
  
    printSkills(nameInput);
  
    // resets form
    nameInputEl.val('');
  };
  
  contentEl.on('submit', handleFormSubmit);


  // fetch function

  var getWeatherData = function(city){

    fetch(queryURL, {
      method: 'GET',
    }) 
    // this alllows data to be configured to json
    .then(function(resp){
      return resp.json()
    })
    .then(function(data){
      console.log(data);
    })

  }