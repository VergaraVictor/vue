import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoidmljdG9ydmVyZ2FyYTE1MzEiLCJhIjoiY2x3cjBhZjZuMDdpdTJrb2kzdjZveDAzayJ9.lJyNiERXR4I-1AHC0v0yEw',
    }
});

export default searchApi;