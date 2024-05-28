import { defineComponent } from "vue";
import { usePlacesStore } from "@/composables";

export default defineComponent({
    name: 'MApView',
    setup() {
        
        const { isLoading, userLocation, isUserlocationReady } = usePlacesStore();

        return {
            isLoading,
            userLocation,
            isUserlocationReady
        }
    }
})
