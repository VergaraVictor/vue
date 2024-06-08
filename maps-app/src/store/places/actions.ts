import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/apis';
import { Feature, PlacesResponse } from '@/interfaces/places';


const actions: ActionTree<PlacesState, StateInterface> = {
    
    getInitialLocation({ commit }) {
        // TODO: colocar loading
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit('setLngLat', {lng: coords.longitude, lat: coords.latitude } ),
            ( err ) => {
                console.error(err);
                throw new Error('No geolocation :( ')
            }
        );
            
    },

    // Todo: colocar el valor de retorno
    async searchPlacesByTerm({ commit, state }, query: string ): Promise<Feature[]> {
        
        if ( query.length === 0 ) {
            //todo: setPlaces
            commit('setPlaces', []);
            return [];
        }

        if ( !state.userLocation ){
            throw new Error('No hay ubicación del usuario');
        }

        const resp = await searchApi.get<PlacesResponse>(`/${ query }.json`, {
            params:{
                proximity: state.userLocation?.join(',')
            }
        });
        
        commit('setPlaces', resp.data.features );

        return resp.data.features ;
        

    }
}



export default actions;