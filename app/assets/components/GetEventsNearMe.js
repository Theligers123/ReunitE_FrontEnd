const axios = require('axios').default;
axios.defaults.baseURL = path();

//set the distance to -1 if you want to get all events
async function getEventsNearMe(distance, tags) { 
    if (Location.hasServicesEnabledAsync()) {
        var coordinates = Location.getLastKnowPositionAsync();
    } else { 
        distance = -1;
    }

    tags = tags.join(',');
    coordinates = coordinates.coords.latitude + ',' + coordinates.coords.longitude;
    var queryParams = '?';
    var setAnd = false;
    if (distance != -1) {
        queryParams += distance;
        setAnd = true;
    }
    if (tags) {
        if (setAnd) {
            queryParams += '&';
        }
        queryParams += tags;
    }
    var eventsIDs = []
    try {
        const res = await axios.get('http://localhost:3000/events/near-me/' + coordinates + queryParams);
        // console.log(res.data.eventsNearMe)
        eventsIDs = res.data.eventsNearMe;
    } catch (err) {
        console.log(err);
        return;
    } finally {
        console.log(eventsIDs)
        const eventsData = await getEventInfo(eventsIDs);
        console.log(eventsData);
    }
}

async function getEventInfo(eventIDs) {
    const events = [];
    try {
        for (let i = 0; i < eventIDs.length; i++) {

            const id = eventIDs[i];
            const res = await axios.get('http://localhost:3000/events/' + id);
            events.push(res.data);
            
        }
    } catch (err) {
        console.log(err);
        return;
    } finally {
        return events;
    }
}
getEventsNearMe(distance, tags, cords);