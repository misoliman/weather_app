const form = document.querySelector("#input-form");
const output = document.querySelector("#output-paragraph")
const city = document.querySelector("#city");
const imperial = document.querySelector("#imperialID");
let unit = null;


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (imperial.checked) {
        unit = "imperial"
    } else {
        unit = "metric"
    }

    output.innerHTML = "Loading..."
    axios.get(`/weather?city=${city.value}&unit=${unit}`).then((res) => {



        if (res.data.cod === 200) {

            output.innerHTML = `${res.data.name} has ${res.data.weather[0].description.toLowerCase()} and temperature feels like  ${res.data.main.feels_like} degrees`

        } else {

            output.innerHTML = " No city found, try another search.."
        }



    }).catch((error) => {
        output.innerHTML = "Not response from server"
    })




})



