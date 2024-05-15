<template>
        <h1>Lista de tareas de Thanos</h1>
        <!-- <h4>Pendientes: {{ $store.state.todos.filter( t => !t.completed ).length }}</h4> -->
        <h4>Pendientes: {{ pending.length }}</h4>

</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
        
    const store = useStore()



    return {
        pending: computed(() => store.getters['pendingTodos'])
    }


  }
}
</script>

<style>

</style>