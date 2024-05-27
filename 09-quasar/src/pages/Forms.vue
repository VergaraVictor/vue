<template>
  <q-page class="q-ma-md">
    
    <span class="text-h3">Forms</span>
    <q-separator spaced />

    <div class="row justify-center">

        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pt-xl"
        >
          <q-input
            filled
            v-model="name"
            label="Correo electrónico"
            type="email"
            lazy-rules
            no-error-icon
            :rules="[ val => val && val.length > 0 || 'Este campo es obligatorio']"
          />

          <q-input
            filled
            type="password"
            v-model="age"
            label="Contraseña"
            lazy-rules
            no-error-icon
            :rules="[ val => val && val.length > 0 || 'Este campo es obligatorio']"
          />

          <q-input
            filled
            type="password"
            v-model="age"
            label="Repetir contraseña"
            lazy-rules
            no-error-icon
            :rules="[ val => val && val.length > 0 || 'Este campo es obligatorio']"
          />

          
          <div class="row justify-end">
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            <q-btn unelevated label="Submit" type="submit" color="primary"/>
          </div>
        </q-form>    
    </div>
  
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Forms',
  setup() {
  
  }
});
</script>