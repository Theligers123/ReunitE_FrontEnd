const axios = require('axios').default;
axios.defaults.baseURL = path();

//set the distance to -1 if you want to get all events
//takes location in geoPoint format
export async function createEvent(name, location, description, imageURL, date, tags) { 
    const image = '';
    toDataUrl(imageURL, function(myBase64) {
        image = myBase64;
    });

    const res = await axios.post('/createEvent', {
        eventName: name,
        location: location,
        tags: tags,
        date: date,
        description: description,
        image: image
    });
}

function toDataUrl(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}