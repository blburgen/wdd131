const year = document.getElementById("currentyear")

const today = new Date();

const temperature = 50; // temperature in °F
const windSpeed = 5; // wind speed in mph

year.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

function calculateWindChill(temp, windSpeed){
    // if temperature is less than or equal to 50 °F and wind speed is greater than 3 mph than perform calculation
    if(temp <= 10 && windSpeed > 4.8){
        return (35.74 + (0.6215 * temp) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temp *(windSpeed**0.16)));
    } else {
        return "N/A";
    };
}

windchill = calculateWindChill(temperature, windSpeed);
