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
    // var rain = data.list[0].weather[0].main;
    var rain = "Rain";
    console.log(windSpeed, temp, rain);

    // var newDiv = document.createElement('div');
    // $(newDiv).attr('id', 'newContent');
    // $('.environmental-column').append(newDiv);
    // // newDiv.innerHTML = rain;

    var box = document.createElement('div'); // creates a box
    $(box).attr('id', 'newDiv');
    var parent = document.getElementsByClassName('site-masthead');
    $(box).insertAfter(parent);
    var image = document.createElement('div');
    $(image).attr('id', 'image');
    $(box).append(image);
    // $(image).prepend('<img id="images" src="jacket.jpg" />')
    var message = document.createElement('div');
    $(message).attr("id", 'message');
    $(box).append(message);
    message.innerHTML = suggestion (temp, windSpeed, rain);
    // $(box).append('<link rel="stylesheet" type = "text/css" href="content.css">');
    $(box).css({
      border: "3px solid black",
      width: "300px",
      padding: "10px",
      margin: "0px 0px 15px 0px"
      color: ""
    });
   $(message).css ({
       fontSize: 15
   });
    });

    // var recommendation  = suggestion(temp, windSpeed, rain);
    // console.log(temp, windSpeed, rain);
    // newDiv.src = chrome.extension.getURL('cat.jpg');
    // console.log("recommendation: " + recommendation);

//  });


 function suggestion (temp, windSpeed, rain) {
    var message = "";
    var raincoat = createImage("raincoat.png");

    if (rain === "Rain"){
       message = message.concat("It's raining! Bring an umbrella/raincoat!</br>", raincoat);
   }

   if (rain === "Snow"){
     message = message.concat("Do you want to build a snowman?</br>");
   }

       message = message.concat("It's raining! Bring an umbrella/rainmac!<br>");
   }
   //with no wind

    if (temp <= 0)  message = message.concat("Ahhhhh, it's freezing wrap up real warm!<br>");//temp = very cold
    if (temp >0 && temp < 10) message = message.concat("Brrrr... it's really cold wear layers<br>");//temp = cold
    if (temp >=10 && temp <15)  message = message.concat("It's pretty chilly, get out a coat unless you're feeling brave!<br>");//temp = very cold
    if (temp >= 15 && temp < 20) message = message.concat("Perhaps wear a jumper but a coat isn't needed<br>"); //temp warm
    if (temp >= 20  && temp <25)  message = message.concat("It's quite warm, light clothing is suggested<br>"); // temp warm
    if (temp >= 25  && temp <35)  message = message.concat("It's scorchin' hot! Light clothing and a cool beer would do nicely<br>"); // temp warm
    if (temp >= 35)  message = message.concat("You may as well just strip... this extension is useless at this point<br>"); // temp warm



   //with wind
   if (windSpeed >=8 && windSpeed < 10) message = message.concat("There's a slight breeze, just letting you know...<br>");
   if (windSpeed >=10 && windSpeed <16) message = message.concat("Strong wind! Bring a wind breaker<br>");
   if (windSpeed >=16 && windSpeed <32) message = message.concat("Strong gale! Bring a wind breaker... or just stay inside<br>");
   if (windSpeed >=32 && windSpeed <50) message = message.concat("A storm is brewing! Be careful!<br>");
   if (windSpeed >=50) message = message.concat("There's a hurricane! Refer to local huricane guidence<br>");

   return message;
   }




 // console.log(raw);


 //var windy = raw.list.wind.speed;

// var rain = data.list.main.temp;

//  var newDiv = document.createElement('div');
//  $(newDiv).attr('id', 'newContent');
//  $('.environmental-column').append(newDiv);
