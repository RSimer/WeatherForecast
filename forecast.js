// var APIkey = c5b4ec174b91d992a568573d90815;
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var inputEl = $('.input');
var contentEl = $('.content');


// remember location.replace


// print the search results

var printSkills = function (city) {
    var listEl = $('<li>');
    var listDetail = city;
    listEl.addClass('list-group-item').text(listDetail);
    listEl.addClass('box');
    listEl.appendTo(contentEl);

    console.log(listEl);
    console.log(listDetail);
  };
  
  var handleFormSubmit = function (event) {
    event.preventDefault();
  
    var nameInput = nameInputEl.val();
  
    if (!nameInput) {
      console.log('Please input a city!');
      return;
    }
  
    printSkills(nameInput);
  
    // resets form
    nameInputEl.val('');
  };
  
  formEl.on('submit', handleFormSubmit);
