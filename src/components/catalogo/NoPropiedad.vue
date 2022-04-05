<template>
  <b-container fluid class="mt-5" data-aos="fade-up" data-aos-duration="3000">
    <b-row class="text-center my-5" >
      <b-col class="curva  px-5 py-3">
        <h1 class=" color-secundario text-uppercase">
          <strong>Propiedades</strong>
        </h1>
      </b-col>
    </b-row>

      <b-container >
        <b-row>
          <b-col class="text-center">
            <h3 class="color-primario">
              Por el momento no hemos encontrado una propiedad con los valores
              que buscas. Envíanos un correo para que te ayudemos a encontrar la propiedad que buscas.
            </h3>
            <h3 class="color-primario">¡Muchas gracias!</h3>
          </b-col>
        </b-row>
      </b-container>
      <Contacto />
  </b-container>
</template>

<script>
import Contacto from "@/components/Contacto";
export default {
  name: "NoPropiedad",
  components: {
    Contacto,
  },
};
</script>

<style lang="scss" scoped>

</style>
