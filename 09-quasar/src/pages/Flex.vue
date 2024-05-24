<template>
  <q-page>

    <div class="row q-mb-md">
      <div class="col bg-primary"></div>
      <div class="col bg-secondary"></div>
      <div class="col bg-accent"></div>
    </div>

    <div class="row q-mb-md"> <!--row por defecto solo tiene 12 slots posiciones -->
      <div class="col bg-primary"></div>
      <div class="col col-5 bg-secondary"></div>
      <div class="col col-6 bg-accent"></div>
    </div>

    <div class="row q-mb-md justify-center"> 
      <div class="col col-4 bg-primary"></div>
      <div class="col col-4 bg-secondary"></div>
    </div>

    <div class="row q-mb-md justify-end"> 
      <div class="col col-4 bg-primary"></div>
      <div class="col col-4 bg-secondary"></div>
    </div>
  
    <div class="row q-mb-md justify-between"> 
      <div class="col col-4 bg-primary"></div>
      <div class="col col-4 bg-secondary"></div>
    </div>

    <q-separator spaced />

    <div class="row q-mb-md justify-between"> 
      <div class="col-12 col-sm-5 col-md-4 bg-primary"></div>
      <div class="col-12 col-sm-5 col-md-4 bg-secondary"></div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Flex'
})
</script>

<style scoped>

.col, .col-4, .col-6, .col-12 {
  height: 50px;
}

</style>