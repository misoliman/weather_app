const axios = require("axios");

const apiKey = "ffe4d83a2710a68676823071cda0b974";
let city = "";
let units = "metric";

async function fetch() {
    console.log("before")

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=alexandria&appid=${apiKey}&units=${units}`)


    console.log(res.data)

    console.log("after")

    console.log("finish")
}

console.log("staring")

fetch()




