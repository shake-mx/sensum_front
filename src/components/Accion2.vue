<template>
  <b-container fluid class="bg-dinamico">
    <b-container class="py-5">
      <b-row class="text-left" align-v="center">
        <b-col cols="10" lg="7" class="mx-auto order-lg-1">
          <h1 class=" color-gris">
            ¡Te presentamos 5 factores que evitan la venta o renta de una propiedad!
          </h1>
          <ol class="mt-4 text-left px-0 px-md-3 ">
                  <li class=" color-gris numero"> Precio no adecuado a la ley de oferta y demanda de la zona</li>
                  <li class=" color-gris numero"> Problemas con la documentación y estatuslegal del inmueble </li>
                  <li class=" color-gris numero"> Mal estado de conservación</li>
                  <li class=" color-gris numero"> Ubicación poco atractiva</li>
                  <li class=" color-gris numero"> Publicidad deficiente</li>
                </ol>
          <br>
          <b-button
            target="_blank"
            block
            class="bg-white curva color-gris py-3 w-75 mx-auto"
            size="lg"
            href="https://wa.me/5215630296930?text=Quiero%20ayuda%20inmobiliaria%20"
          >
            <b-icon icon="arrow-right"></b-icon>
            <span> Vende o Renta Ahora tu Propiedad</span></b-button
          >
        </b-col>
        <b-col cols="10" lg="5" class="my-0 mx-auto order-lg-0" >
          <img
                src="@/assets/accion.png"
                alt="Vende o Renta tu Propiedad"
                class="img-fluid curva"
              />


        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "Accion2",
};
</script>

<style lang="scss" scoped>
.btn-lg{
  font-size: 1.75rem!important;
}
.btn-secondary{
  border-color: transparent!important;
}


.numero{
  font-size: 1.75rem!important;
}

@media only screen and (max-width: 768px) {
.numero{
  font-size: 1.5rem!important;
}
} 
</style>
