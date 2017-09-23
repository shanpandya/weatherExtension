var APIKEY = "8420a749e7fef936a7285df4ad75588b";
// // write script to see which page they are on (i.e. which city)
var locationName = document.getElementsByClassName('location-name')[0].innerHTML;
console.log("locationName: " + locationName);

// using data parsed from the BBC website stored as var - lookup against city list and return the city id
// console.log("the script is running");
// console.log("API key: " + API);

<<<<<<< HEAD

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
=======
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
>>>>>>> 13f672d4840d8a6147e37b4aa9139851158fdeef

// create API request based on the city id
var raw = $.getJSON( "http://api.openweathermap.org/data/2.5/forecast?id=" + pathname + "&APPID=" + APIKEY, function( data ) {
   return data
 });


 //var windy = raw.list.wind.speed;
 
var rain = raw.list[0].main.humidity;

 var newDiv = document.createElement('div');
 $(newDiv).attr('id', 'newContent');
 $('.environmental-column').append(newDiv);

<<<<<<< HEAD
 newDiv.innerHTML = 'test aujfbsad.khjfhcsdlhjfcbsdklj bcdjlf bcsdjkcnjdkjbvckdsjcsjdbfjhdfbvsdhjbckhjbsdvjhbsdvjkhsd'
=======
 newDiv.innerHTML = rain;
>>>>>>> 13f672d4840d8a6147e37b4aa9139851158fdeef
