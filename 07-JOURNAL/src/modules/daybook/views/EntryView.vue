<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{ day }}</span>
                <span class="mx-1 fs-3">{{ mounth }}</span>
                <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
            </div>
            
            <div>

                <input type="file"
                        @change="onSelectedImage"
                        ref="imageSelector"
                        v-show="false"
                        accept="image/png, image/jpg"
                        >
                        <!-- multiple> Esto en caso de que se quisieran cargar varios archivos al tiempo-->
                        <!-- v-show="false" para ocultar el "seleccionar archivo" -->
                <button
                    v-if="entry.id" 
                    class="btn btn-danger mx-2"
                    @click="onDeleteEntry">                    
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>

                <button class="btn btn-primary"
                    @click="onSelecteImage">
                    Subir foto
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>

        <hr>
        <div class="d-flex flex-column px-3 h-75">
            <textarea
                v-model="entry.text"
                placeholder="¿Qué sucedio hoy?"
            ></textarea>
        </div>
            
        <img 
            v-if="entry.picture && !localImage === null"   
            :src="entry.picture" 
            alt="entry-picture"
            class="img-thumbnail">

        <img 
            v-if="localImage"
            :src="localImage" 
            alt="entry-picture"
            class="img-thumbnail">
    
    </template>

    <Fab
        icon="fa-save"
        @on:click="saveEntry"
    />

</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'  // se asocian con las propiedades computadas
import Swal from 'sweetalert2'

import getDayMonthYear from '../helpers/getDayMonthYear'
import uploadImage from '../helpers/uploadImage'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    },

    data() {
        return {
            entry: null,
            localImage: null,
            file: null
        }
    },
    
    computed: {
        ...mapGetters('journal', ['getEntryById']),
        day() {
            const { day } = getDayMonthYear( this.entry.date )
            return day
        },
        month() {
            const { month } = getDayMonthYear( this.entry.date )
            return month
        },
        yearDay() {
            const { yearDay } = getDayMonthYear( this.entry.date )
            return yearDay
        }   
    },

    methods: {
        ...mapActions('journal', ['updateEntry','createEntry', 'deleteEntry']),

        loadEntry() {

            let entry;
            
            if( this.id === 'new') {
                entry = {
                    text: '',
                    date: new Date().getTime()
                }
            } else {

                entry = this.getEntryById( this.id )
                if ( !entry ) return this.$router.push({ name: 'no-entry' })
            
            }

            this.entry = entry
        },
        async saveEntry() {

            new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false
            })
            Swal.showLoading()

            const picture = await uploadImage( this.file )

            this.entry.picture = picture
            
            if( this.entry.id ){
                // Actualizar
                // Action del Journal Store
                await this.updateEntry( this.entry )
            } else {
                // Crear una nueva entrada
                const id = await this.createEntry( this.entry )

                // await action

                //recirectTo => entry, param: id
                this.file = null
                this.$router.push({ name: 'entry', params: { id } })
            }

            Swal.fire('Guardado', 'Entrada registrada con éxito', 'success')
            
        },
        async onDeleteEntry() {
            
            // const result = await Swal.fire({ // Se desetructura para que quede un para que quede un codigo más limpio 
            const {isConfirmed} = await Swal.fire({
                title: '¿Está seguro?',
                text: 'Una vez borrado, no se puede recuperar',
                showDenyButton: true,
                confirmButtonText: 'Si, estoy seguro'
            })

            if ( isConfirmed ) {
                new Swal({
                    title: 'Espere por favor',
                    allowOutsideClick: false
                })
                Swal.showLoading()
                await this.deleteEntry( this.entry.id )
                // Redireccionar al usuario fuera de aquí...
                this.$router.push({ name: 'no-entry' })
                // redireccionar al entry 

                Swal.fire('Eliminado','','success')
            }    
        },
        
        onSelectedImage( event ) {
            const file = event.target.files[0]
            if ( !file ){
                this.localImage = null
                this.file = null
                return
            }

            this.file = file

            const fr = new FileReader() //FileReader es de Javascrript
            fr.onload = () => this.localImage = fr.result
            fr.readAsDataURL( file )

        },
        onSelecteImage() {
            this.$refs.imageSelector.click() // Esto es propio de Javascript
            // document.querySelector('input').click() Es como si realizara esto       
        }
    },

    created() {
        // console.log(this.$route.params.id); con el props id se puede pasar de la siguente manera:
        // console.log(this.id);
        this.loadEntry()
    },

    watch: {
        // id( value, oldvalue) { esto es para hacer una validafción del valor anterior vs al actual
        //     console.log({ value, oldvalue });
        // }
        id() { 
            this.loadEntry()
        }
    }   
}
</script>

<style lang="scss" scoped>

textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;    
    }

}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>