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
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
            });   
        
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
