<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
  props: {
    detalles: {
      nombre: {
        type: String,
        required: true,
      },
      descripcion: {
        type: String,
        required: true,
      },
      precio: {
        type: String,
        required: true,
      },
      cantidad: {
        type: String,
        required: true,
      },
    },
  },
};
</script>

<template>
  <Card :detalles="detalles" />
  <router-link to="/">Volver al inicio</router-link>
</template>
