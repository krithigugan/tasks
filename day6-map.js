const XMLHttpRequest = require('xhr2');

const countries = new XMLHttpRequest();

countries.open('GET','https://restcountries.com/v3.1/all'); 
countries.send();
countries.onload = function() {
    console.log(JSON.parse (countries.response));
}