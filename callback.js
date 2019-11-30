const geocode = (address, callback) => {
    console.log(callback("hello"));

    setTimeout(() => {
        let data = {
            latitude: 0,
            longitude: 0
        };
        callback(data)
    }, 2000)
}

const data = geocode("hyderabad", (data) => { console.log(data) });
console.log("data : " + data);
