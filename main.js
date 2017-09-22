const APIKEY = 8420a749e7fef936a7285df4ad75588b;
// write script to see which page they are on (i.e. which city)

// using data parsed from the BBC website stored as var - lookup against city list and return the city id
var id = $.getJSON( "city.list.json", function(data) {  
    // console.log( "JSON Data: " + data);
    $.each(data, function( index, val ) {
        if (data[index].name == value) {
            return data[index].id
            console.log("hi there");
        }
    });
});

// list of variables we want to store things in
var raw;

// create API request based on the city id
$.getJSON( `api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=${APIKEY}`, function( data ) {
   raw = data
 };
