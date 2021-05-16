<template>
  <div class="rounded">
    <b-carousel
      id="carousel-fade"
      fade
      indicators
      :interval="2000"
      controls
      class="carrusel "
    >
      <b-carousel-slide>
        <template v-slot:img>
          <img 
          class="d-block class-name"
          src="@/assets/servicios/Servicios_01.jpeg"
          alt="">
        </template>
      </b-carousel-slide>
         <b-carousel-slide>
        <template v-slot:img>
          <img 
          class="d-block class-name"
          src="@/assets/servicios/Servicios_02.jpeg"
          alt="">
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "ServiciosCarrusel",
};
</script>


<style lang="scss" scoped>

.carrusel{
    width: 100%    !important;
    height: auto   !important;   
}


.alto{
  width: 100%    !important;
  height: 27rem   !important;   
}

.class-name {
   height:27rem;
 }


</style>