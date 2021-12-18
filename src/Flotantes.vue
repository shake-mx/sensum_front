<template>
  <b-container fluid class="bg-flotante ">
    <b-row class="text-right accionadores" align-v="end">
      <b-col cols="12" >
        <h5 >
            <font-awesome-icon class="color-white bg-dinamico p-2 cuadro" size="4x" icon="home"/> 
          </h5>
        <h5 >
            <font-awesome-icon class="color-white bg-whats p-2 cuadro" size="4x" :icon="['fab', 'whatsapp']"/> 
          </h5>
        <h5>
            <font-awesome-icon class="color-white bg-face p-2 cuadro"  size="4x" :icon="['fab', 'facebook-f']" /> 
          </h5>
          
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Flotantes",
};
</script>

<style lang="scss" scoped>
.accionadores {
  height: 80vh;
}

.bg-flotante{
  background-color: transparent;
  position: fixed;
  z-index: 1000;
}
.cuadro{
width:50px;
height: 50px;
border-radius: 15px;
}
</style>
