import { defineComponent, onMounted, ref, toRaw, watch } from "vue";
import { usePlacesStore } from "@/composables";
import Mapboxgl from "mapbox-gl";

export default defineComponent({
    name: 'MApView',
    setup() {
        
        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserlocationReady } = usePlacesStore();

        const initMap = async () => {
            if ( !mapElement.value ) throw new Error('Div Element no exist');
            if ( !userLocation.value ) throw new Error('user location no existe');

            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/light-v10', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
            });
            
            const myLocationPopup = new Mapboxgl.Popup(/*{ offset: [0,-25]} Para mover el popup*/)
                .setLngLat( userLocation.value )
                .setHTML(`
                    <h4>Aquí estoy</h4>
                    <p>Actualmente en Bogotá</p>
                `)

            const myLocationMarker  = new Mapboxgl.Marker()
                .setLngLat( userLocation.value )
                .setPopup ( myLocationPopup )
                .addTo( map );
                
            // todo establecer el mapa en vuex 
        }

        onMounted(() => {
            if ( isUserlocationReady.value ) 
                return initMap();            
        });

        watch( isUserlocationReady, ( newval ) => {
            if ( isUserlocationReady.value) initMap();
        })

        return {
            isUserlocationReady,
            mapElement
        }
    }
})
