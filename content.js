var APIKEY = "8420a749e7fef936a7285df4ad75588b";
// // write script to see which page they are on (i.e. which city)
var locationName = document.getElementsByClassName('location-name')[0].innerHTML;
console.log("locationName: " + locationName);

// using data parsed from the BBC website stored as var - lookup against city list and return the city id
// console.log("the script is running");
// console.log("API key: " + API);


var ID = $.getJSON(chrome.extension.getURL("city.list.json"), function(data) {
    // console.log( "JSON Data: " + data);
    $.each(data, function(index) {
        // console.log("index: " + index)
        // console.log(data[index].id);
        if (data[index].name == locationName && data[index].country == "GB") {
            return data[index].id;
        }
    });
});

console.log(ID);

console.log("location id: " + ID);

// list of variables we want to store things in
var raw;
// var name;
// var ID;
// var random = $.getJSON(chrome.extension.getURL("city.list.json"), function(data) {
//     // console.log( "JSON Data: " + data);
//     $.each(data, function(index) {
//         // console.log("index: " + index)
//         // console.log(data[index].name);
//         if (data[index].name === locationName && data[index].country == "GB") {
//             console.log("got into the if statement");
//             console.log("id in if statement: " + data[index].id);
//             ID = data[index].id;
//             return ID;
//         }
//     });
// });

// var temp = random;
// console.log("random: " + random);
// console.log ("location ID: " + ID)


// get pathname (i.e. id)
var pathname = window.location.pathname.split("/").pop();
console.log("pathname: " + pathname);


// create API request based on the city id
$.getJSON( "http://api.openweathermap.org/data/2.5/forecast?id=" + pathname + "&APPID=" + APIKEY, function( data ) {

    var windSpeed = data.list[0].wind.speed;
    var temp = data.list[0].main.temp - 273.15;
    var rain = data.list[0].weather[0].main;

    console.log(windSpeed, temp, rain);

    var newDiv = document.createElement('div');
    $(newDiv).attr('id', 'newContent');
    $('.environmental-column').append(newDiv);
    // newDiv.innerHTML = rain;

    var recommendation  = suggestion(temp, windSpeed, rain);
    console.log(temp, windSpeed, rain);
    newDiv.innerHTML = recommendation;

 });


 function suggestion (temp, windSpeed, rain) {
    var message = "";
    if (rain === "Rain"){
       message = message.concat("It's raining! Bring an umbrella/raincoat!</br>") ;
   }

   if (rain === "Snow"){
     message = message.concat("Do you want to build a snowman?</br>");
   }
   //with wind
   else if (windSpeed > 10){
       if (temp >= 8 && temp < 20) message = message.concat("Brrrr it's cold out... bring a heavy coat"); //temp = cold
       if (temp < 8) message = message.concat("Brrrr it's cold out... bring a heavy coat") ;//temp = very cold
       if (temp >= 20 && temp < 30) message = message.concat("Brrrr it's cold out... bring a heavy coat"); //temp warm
       if (temp >= 30) message = message.concat("Brrrr it's cold out... bring a heavy coat");//temp very warm
   }
   return message;
   }




 // console.log(raw);


 //var windy = raw.list.wind.speed;

// var rain = data.list.main.temp;

//  var newDiv = document.createElement('div');
//  $(newDiv).attr('id', 'newContent');
//  $('.environmental-column').append(newDiv);
