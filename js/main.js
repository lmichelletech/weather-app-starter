
//select elements and create your variables
var ROOT_URL= "http://api.openweathermap.org/data/2.5/weather?zip="
var API_KEY = "71885e220149c4206e85c1ec66b47f80"
var zip = document.querySelector('.cityZip')
var title = document.querySelector('.cityTitle')
var weather = document.querySelector('.cityWeather')
var temp = document.querySelector('.cityTemp')
var humid = document.querySelector('.cityHumid')
var icon = document.querySelector('.cityIcon')



//function definitions
function kelToFar(kelvin){
    return Math.round(kelvin * 9/5 -459.67)
}

function getWeather(zipCode){
    console.log(zipCode)
    var degree = '\xB0'
    //$ is how you start with jquery
    $.ajax({
        url: `${ROOT_URL}${zipCode},us&appid=${API_KEY}`,
        dataType: 'json',
        success: function(data){
            console.log(data)
            title.textContent = "City: "
            title.textContent += data.name
            weather.textContent += data.weather[0].description
            temp.textContent += kelToFar(data.main.temp)
            temp.textContent += degree + ' F'
            humid.textContent = data.main.humidity + ' %'
        },
        error: function(e){
            console.log('Error')
        }
    })
}


//call functions and event listeners
//default location
getWeather('33166')
zip.addEventListener("keypress", function(event){
     //use console to debug and see event properties
     //console.log(event)
    if(event.key == 'Enter'){
       getWeather(zip.value)
    }
})