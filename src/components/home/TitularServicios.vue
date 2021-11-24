<template>
  <b-container fluid class="bghero-parallax vertical-center-servicios">
    <b-container class="py-5">
      <b-row class="text-center bg-hero curva" >
        <b-col cols="12" class="py-3">
          <h1 class="color-secundario text-uppercase">
            <strong>Nuestros Servicios</strong>
          </h1>
          <br>
          <br>
          <h2 class=" color-secundario">
              Somos un equipo de profesionales inmobiliarios comprometidos con proteger, 
              guiar y conectar los intereses de nuestros clientes, aportando soluciones 
              con alto nivel de eficiencia y conforme a valores institucionales
          </h2>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "TitularServicios",
};
</script>

<style lang="scss" scoped>
.titulo {
  min-height: 60px;
}


.bghero-parallax {
  height: 100vh;
  background: url("~@/assets/hero.png");
  background-repeat: repeat;
  background-position: bottom;
  background-size: initial;
  background-attachment: fixed;
}



@media only screen and (min-width: 576px) {
.bghero-parallax {
  height: 50vh;
  background-repeat: no-repeat;
  background-size: cover;
}
}

.vertical-center-servicios {
  display: flex!important;
  align-items: center!important;
}
</style>
