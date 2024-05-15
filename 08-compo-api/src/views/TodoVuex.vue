<template>
        <h1>Lista de tareas de Thanos</h1>
        <h4>Pendientes: {{ $store.state.todos.filter( t => !t.completed ).length }}</h4>
</template>

<script>
export default {

}
</script>

<style>

</style>