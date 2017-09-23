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

// create API request based on the city id
$.getJSON( `api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=${APIKEY}`, function( data ) {
   raw = data
 });

 var newDiv = document.createElement('div');
 $(newDiv).attr('id', 'newContent');
 $('.environmental-column').append(newDiv);

 newDiv.innerHTML = 'test aujfbsad.khjfhcsdlhjfcbsdklj bcdjlf bcsdjkcnjdkjbvckdsjcsjdbfjhdfbvsdhjbckhjbsdvjhbsdvjkhsd'
