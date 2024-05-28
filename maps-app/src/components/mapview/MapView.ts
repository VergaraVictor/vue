import { defineComponent, onMounted, ref } from "vue";
import { usePlacesStore } from "@/composables";

export default defineComponent({
    name: 'MApView',
    setup() {
        
        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserlocationReady } = usePlacesStore();

        onMounted(() => {
            console.log( mapElement.value );            
        });

        return {
            isUserlocationReady,
            mapElement
        }
    }
})
