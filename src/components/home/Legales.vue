<template>
  <b-container fluid class="bg-secundario vertical-center-servicios">
    <b-container class="py-5">
      <b-row class="text-center"  >
        <b-col cols="10" class="py-3 mx-auto">
          <h2 class="color-plata text-uppercase">
            <strong>Soluciones Legales</strong>
          </h2>
       </b-col>
       
       <b-col cols="12" lg="6" class="my-5 mx-auto">
          <h3 class=" color-plata text-justify">
              Brindamos servicios jurídicos especializados en aspectos 
              patrimoniales relacionados con negocios inmobiliarios, 
              destacando los siguientes:
          </h3>
          <ul class="mt-4 text-left px-0 px-md-3 ">
                  <li class=" color-plata  sensum"> Juicio Sucesorio Testamentario</li>
                  <li class=" color-plata  sensum"> Juicio Sucesorio Intestamentario</li>
                  <li class=" color-plata  sensum"> Controversias por Arrendamiento Inmobiliario</li>
                  <li class=" color-plata  sensum"> Juicio de Usucapio/Prescripción Positiva</li>
                  <li class=" color-plata  sensum"> Inmatriculación Judicial/Administrativa</li>
                  <li class=" color-plata  sensum"> Atención con Enfoque al Cliente</li>
                  <li class=" color-plata  sensum"> Otorgamiento de Firma y Escritura</li>
                  <li class=" color-plata  sensum"> Cumplimiento y Rescisión de Contrato</li>
                  <li class=" color-plata  sensum"> Procedimiento de mediación en Centros de Justicia Alternativa</li>
                </ul>
        </b-col>
        <b-col cols="10" lg="4" class="my-5 mx-auto" align-self="center">
          <img
                src="@/assets/servicios/sl.png"
                alt="Soluciones Legales"
                class="img-fluid curva"
              />


        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "Legales",
};
</script>

<style lang="scss" scoped>
.titulo {
  min-height: 60px;
}

.sensum{
  font-size: 1.75rem!important;
}

@media only screen and (max-width: 768px) {
.sensum{
  font-size: 1.5rem!important;
}
} 


</style>
