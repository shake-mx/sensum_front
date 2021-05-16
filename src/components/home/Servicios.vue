<template>
  <b-col cols="12" md="6">
    <h1 class="py-5">
        Servicios
        </h1>
    <b-col cols="10" class="tarjeta my-4 mx-auto">
      <b-row>
        <b-col cols="9" class="mx-auto">
          <ServiciosCarrusel/>
  
        </b-col>
         <b-col cols="12">
          <h5 class="my-3 text-center subtitulo-valores descripcion">
            "...una flor para cada momento de tu vida..."
          </h5>
        </b-col>
        <b-col cols="12">
          <h4 class="text-center subtitulo-valores descripcion">
            Las fechas importantes de la vida siempre han sido acompañadas por
            flores. 
          </h4>
        </b-col>
      </b-row>
    </b-col>
  </b-col>
</template>


<script>
import ServiciosCarrusel from "@/components/home/ServiciosCarrusel"
export default {
  name: "Servicios",
  components:{
    ServiciosCarrusel
  }
};
</script>


<style lang="scss" scoped>

.descripcion{
  height: 2rem;
}

</style>