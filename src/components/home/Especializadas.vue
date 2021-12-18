<template>
  <b-container fluid class="bg-plata vertical-center-servicios">
    <b-container class="py-5">
      <b-row class="text-center"  >
        <b-col cols="10" class="py-3 mx-auto">
          <h2 class="color-secundario text-uppercase">
            <strong>Soluciones Especializadas</strong>
          </h2>
       </b-col>
       <b-col cols="12" class="my-5 mx-auto">
          <h3 class=" color-secundario text-justify">
              El equipo de profesionales de Sensum está calificado para brindar 
              servicios especializados con altos estándares de calidad, 
              contribuyendo a la realización de negocios inmobiliarios de forma exitosa y segura para todas las partes involucradas. Destacamos los siguientes servicios:
          </h3>
        </b-col>
      </b-row>
      <b-row class=" text-center py-5">
        <b-col cols="12" md="8" class="mx-auto" >
          <b-carousel :interval="4000" controls indicators fade  >
            <b-carousel-slide caption="Avalúos para INFONAVIT y FOVISSSTE" >
              <template v-slot:img>
                <img
                  src="@/assets/servicios/aiei.png"
                  alt="Avalúos para INFONAVIT y FOVISSSTE"
                  class="img-fluid curva shadow-sm"
                />
              </template>
            </b-carousel-slide>
            <b-carousel-slide caption="Avalúos para Tesorería">
              <template v-slot:img>
                <img
                  src="@/assets/servicios/at.png"
                  alt="Avalúos para Tesorería"
                  class="img-fluid curva shadow-sm"
                />
              </template>
            </b-carousel-slide>
            <b-carousel-slide caption="Elaboración de Programas de Obra">
              <template v-slot:img>
                <img
                  src="@/assets/servicios/epo.png"
                  alt="Elaboración de Programas de Obra"
                  class="img-fluid curva shadow-sm"
                />
              </template>
            </b-carousel-slide>
            <b-carousel-slide caption="Elaboración de Planos">
              <template v-slot:img>
                <img
                  src="@/assets/servicios/ep.png"
                  alt="Elaboración de Planos"
                  class="img-fluid curva shadow-sm"
                />
              </template>
            </b-carousel-slide>
            <b-carousel-slide caption="Gestoría para Tramitación de Certificados">
              <template v-slot:img>
                <img
                  src="@/assets/servicios/gtacmd.png"
                  alt="Gestoría para Tramitación de Certificados"
                  class="img-fluid curva shadow-sm"
                />
              </template>
            </b-carousel-slide>
            <b-carousel-slide caption="Inscripción de créditos INFONAVIT">
              <template v-slot:img>
                <img
                  src="@/assets/servicios/aci.png"
                  alt="Inscripción de créditos INFONAVIT"
                  class="img-fluid curva shadow-sm"
                />
              </template>
            </b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>


    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "Especializadas",
};
</script>

<style lang="scss" scoped>
.titulo {
  min-height: 60px;
}



</style>
