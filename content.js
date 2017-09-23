var APIKEY = "8420a749e7fef936a7285df4ad75588b";
// // write script to see which page they are on (i.e. which city)
var locationName = document.getElementsByClassName('location-name')[0];
console.log("locationName: " + locationName.innerHTML);

// using data parsed from the BBC website stored as var - lookup against city list and return the city id
// console.log("the script is running");
// console.log("API key: " + API);


var id = $.getJSON(chrome.extension.getURL("city.list.json"), function(data) {  
    // console.log( "JSON Data: " + data);
    $.each(data, function(index) {
        // console.log("index: " + index)
        if (data[index].name == locationName.innerHTML) {
            console.log("got into the if statement");
            return data[index].id;
        }
    });
});

console.log("location id: " + id);

// list of variables we want to store things in
var raw;

// create API request based on the city id
$.getJSON( `api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=${APIKEY}`, function( data ) {
   raw = data
 });

 var newDiv = document.createElement('div');
 $(newDiv).attr('id', 'newContent');
 $('.environmental-column').append(newDiv);

 newDiv.innerHTML = 'test aujfbsad.khjfhcsdlhjfcbsdklj bcdjlf bcsdjkcnjdkjbvckdsjcsjdbfjhdfbvsdhjbckhjbsdvjhbsdvjkhsd'