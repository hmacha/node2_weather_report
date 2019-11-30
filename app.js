const request = require('request');
const fs = require("fs");

const url = "https://api.darksky.net/forecast/50adf5e0aa9bcbdc83e15e47f856703b/37.8267,-122.4233";

request({ url: url }, (error, response) => {
    let data = JSON.parse(response.body);
    fs.writeFileSync("report.json", data)
    console.log("Summary : " + data.currently.summary);
})