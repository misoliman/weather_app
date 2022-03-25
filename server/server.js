const path = require("path");
const express = require("express");
const cors = require("cors")
const chalk = require("chalk");
const axios = require("axios")

const app = express();
const PORT = 3000;

const APIKey = "ffe4d83a2710a68676823071cda0b974";

const publicLocation = path.join(__dirname, "../public");
const viewsLocation = path.join(__dirname, "../templates/views");

app.set("view engine", "ejs");
app.set("views", viewsLocation);

app.use(cors({
    origin: `http://localhost:${PORT}`
}))

app.use(express.static(publicLocation));

app.get("/", (req, res) => {

    res.render("home")
})

app.get(("/weather"), (req, res) => {
    const { city: inputCity, unit: inputUnit } = req.query;
    const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${APIKey}&units=${inputUnit}`;


    axios.get(APIurl).then((response) => {
        res.send(response.data)
        return
    }).catch((error) => {
        res.send(error.response.data)
        return;
    })

})

app.get("/about/", (req, res) => {
    res.render("about")
})

app.get("/help/", (req, res) => {
    res.render("help")
})

app.get("*", (req, res) => {
    res.render("404")
})


app.listen(PORT, () => {
    console.log(chalk.green.inverse(`Listening on port ${PORT}`));
})