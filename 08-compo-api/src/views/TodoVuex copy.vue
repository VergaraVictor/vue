<template>
        <h1>Lista de tareas de Thanos</h1>
        <!-- <h4>Pendientes: {{ $store.state.todos.filter( t => !t.completed ).length }}</h4> -->
        <h4>Pendientes: {{ pending.length }}</h4>
        
        <hr>
        <button 
          :class="{ 'active': currentTab === 'all' }"
          @click="currentTab ='all'"
        >
          Todos
        </button>

        <button 
          :class="{ 'active': currentTab === 'pending' }"
          @click="currentTab ='pending'"
        >
          Pendientes
        </button>

        <button 
          :class="{ 'active': currentTab === 'completed' }"
          @click="currentTab ='completed'"
        >
          Completados
        </button>


        <div>
          <ul>
            <li v-for="todo in getTodosByTab" :key="todo.id"
              :class="{ 'completed': todo.completed }"
              @dblclick="toggleTodo( todo.id )">
              {{ todo.text }}
            </li>
          </ul>
        </div>

</template>


<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
                
    const store = useStore()

    const currentTab = ref('all')
    
    // const toggleTodo = ( id ) => {(
    //   store.commit('toggleTodo', id )
    // )} Esto no se necesita en el setup se puede llevar directamente al return
    

    return {
      currentTab,

      all: computed(() => store.getters['allTodos'] ),
      completed: computed(() => store.getters['completedTodos'] ),
      pending: computed(() => store.getters['pendingTodos'] ),

      getTodosByTab: computed( () => store.getters['getTodosByTab'](currentTab.value) ),

      // Methods
      toggleTodo: ( id ) => store.commit('toggleTodo', id )
    }


  }
}
</script>

<style scoped>

div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}

</style>