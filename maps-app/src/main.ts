import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; 
mapboxgl.accessToken = 'pk.eyJ1IjoidmljdG9ydmVyZ2FyYTE1MzEiLCJhIjoiY2x3cjBhZjZuMDdpdTJrb2kzdjZveDAzayJ9.lJyNiERXR4I-1AHC0v0yEw';

if ( !navigator.geolocation ) {
    alert('Tu navegador no soporta el Geolocation');
    throw new Error('Tu navegador no soporta el Geolocation');
}



createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
