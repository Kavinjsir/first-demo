import axios from 'axios';

const BASE_URL = 'https://www.metaweather.com/api';

async function getLocationID(cityName) {
    try {
        const result = await axios.request({
            method: 'GET',
            url: `${BASE_URL}/location/search/?query=${cityName}`
        });
        return result.data[0].woeid;       
    } catch (error) {
        console.error('Cannot get location id');
        throw error;
    }
}

async function getLocationInfo(woeid) {
    try {
        const result = await axios.request({
            method: 'GET',
            url: `${BASE_URL}/location/${woeid}`
        });
        return result.data;       
    } catch (error) {
        console.error('Cannot get location info');
        throw error;       
    }
}

async function main() {
    const city = 'shanghai';
    const woeid = await getLocationID(city);
    const cityInfo = await getLocationInfo(woeid);
    return cityInfo;
}

export default main;
