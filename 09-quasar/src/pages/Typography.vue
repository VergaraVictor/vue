<template>
  <q-page class="flex column q-pa-md">
    
    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>

    <q-separator />

    <span class="text-subtitle1"> Subtitle 1</span>
    <span class="text-subtitle2"> Subtitle 2</span>
    <!-- <h1>Typography</h1> -->

    <q-separator />
    <p class="text-body1">Consequat aliquip nostrud mollit labore amet cillum. Duis dolore velit sunt eu sunt enim amet ea laboris voluptate eiusmod. Voluptate sint deserunt mollit eiusmod sunt mollit tempor eiusmod est ullamco eiusmod commodo qui laboris.</p>
    <p class="text-body2">Enim velit minim enim amet deserunt proident non qui adipisicing commodo. Qui adipisicing ullamco voluptate tempor cillum dolor deserunt nostrud. Do ut adipisicing amet laboris reprehenderit anim fugiat. Aliquip est qui magna culpa laborum qui fugiat aliqua est elit eiusmod. Id aliquip culpa laboris excepteur id deserunt labore. Sunt pariatur culpa adipisicing quis aliquip velit veniam officia sunt culpa sit commodo ad ullamco. Pariatur ad ad reprehenderit mollit exercitation dolore consectetur ad sunt non nisi.</p>
    <q-separator />
    
    <span class="text-weight-thin">Adipisicing sunt proident aute pariatur laboris nulla proident ullamco aliquip irure enim reprehenderit.</span>
    <span class="text-weight-ligh">Dolore culpa commodo veniam adipisicing consequat nostrud culpa aliquip laboris voluptate duis.</span>
    <span class="text-weight-regular">Id proident consequat laboris duis veniam minim nostrud occaecat non culpa excepteur cillum.</span>
    <span class="text-weight-medium">Nulla velit adipisicing fugiat aliqua.</span>
    <span class="text-weight-bold">Ex veniam elit laborum deserunt laboris laboris ipsum commodo nostrud.</span>
    <span class="text-weight-bolder">Occaecat magna nulla mollit sint sit labore aute officia tempor velit sit amet.</span>

    <q-btn 
      color="primary"
      label="Abrir menú lateral"
      class="q-mt-md"
    />

  </q-page>
</template>

<!-- <script setup>
defineOptions({
  name: 'Typography'
});
</script> -->
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Typography'
})
</script>
