import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: 'false',
        access_token: 'pk.eyJ1IjoidmljdG9ydmVyZ2FyYTE1MzEiLCJhIjoiY2x3cjBhZjZuMDdpdTJrb2kzdjZveDAzayJ9.lJyNiERXR4I-1AHC0v0yEw',
    }
});

export default directionsApi;