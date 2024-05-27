export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number]; // Longitud y latitud
}

function state(): PlacesState {
    return {
        isLoading: true,
        userLocation: undefined,
    }
}

export default state;