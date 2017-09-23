var windSpeed = raw.wind.speed;
var temp = raw.main.temp - 273;
var rain = raw.precipitation.mode;

if (rain === "rain"){
    return "umbrella and raincoat strongly recommended";
}
//with no wind
if (windSpeed <= 10){
    if (temp >= 8 && temp < 20) return "light jacket and jeans"; //temp = cold
    if (temp < 8) return "heavy jacket and scarf";//temp = very cold
    if (temp >= 20 && temp < 30) return "t-shirt and jeans"; //temp warm
    if (temp >= 30) return "t-shirt and shorts";//temp very warm
}
//with wind
else if (windSpeed > 10){
    if (temp >= 8 && temp < 20) return "heavy jacket and scarf"; //temp = cold
    if (temp < 8) return "heavy jacket, sweater, scarf, and earwarmers";//temp = very cold
    if (temp >= 20 && temp < 30) return "light jacket and jeans"; //temp warm
    if (temp >= 30) return "t-shirt and jeans";//temp very warm
}
