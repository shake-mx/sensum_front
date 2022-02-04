<template>
  <b-container fluid class="bghero-parallax vertical-center-servicios" id="soluciones" data-aos="fade-up" data-aos-duration="3000">
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
  height: 50vh;
  background: url("~@/assets/heromd.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}



@media only screen and (max-width: 768px) {
.bghero-parallax {
  height: 50vh;
  background: url("~@/assets/herosm.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: initial;
}
} 

@media only screen and (max-width: 576px) {
.bghero-parallax {
  height: 90vh;
  background: url("~@/assets/herosm.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: initial;
}
} 

.vertical-center-servicios {
  display: flex!important;
  align-items: center!important;
}
</style>
