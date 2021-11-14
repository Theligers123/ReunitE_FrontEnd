const axios = require('axios').default;
axios.defaults.baseURL = path();

//set the distance to -1 if you want to get all events
export async function editUser(user) {
    toDataUrl(user.image, response => {
        user.image = response
    });

    const res = await axios.put('/editUser', {
        "data": user
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