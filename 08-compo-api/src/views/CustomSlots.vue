<template>
    <h1>Aprendiendo Slots</h1>
    <button>Abrir Modal</button>


    <Modal title="Hola mundo">
        <!-- <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit!</p>
        <button>Salir</button>
        <h2>Titulo del modal</h2> -->
        <template v-slot:body>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit!</p>   
        </template>

        <template v-slot:footer>
            <button>Salir</button>   
        </template>

        <template v-slot:header>
            <h2>Titulo del modal</h2>   
        </template>
    </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
    components: { Modal },
    setup(){

    }
}
</script>

<style scoped>

</style>