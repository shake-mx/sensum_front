<template>
  <div >
    <b-carousel
      id="carousel-fade"
      fade
      indicators
      :interval="4000"
      controls
      no-hover-pause
      class="carrusel "
    >
      <b-carousel-slide>
        <template v-slot:img>
          <img 
          class="img-fluid rounded"
          src="@/assets/servicios/Servicios_01.jpeg"
          alt="Regalos Personalizados">
        </template>
      </b-carousel-slide>
         <b-carousel-slide>
        <template v-slot:img>
          <img 
          class="img-fluid rounded"
          src="@/assets/servicios/Servicios_02.jpeg"
          alt="Peonías">
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

img{
  height: 40rem !important;
  width: 100% !important;
}

@media only screen and (max-width: 576px) {
  img{
  height: 25rem !important;

}

} 


</style>