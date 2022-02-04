<template>
  <b-container fluid class="bghero-parallax vertical-center" id="inicio">
      <b-row >
        <b-col  cols="8" class="bg-hero pl-0 curva-hero">
          <b-row class="justify-content-md-end justify-content-center">
            <b-col cols="6"  >
              <img
                src="@/assets/logo_ssi.png"
                class="img-fluid p-0 m-0"
                alt="Sensum Soluciones Inmobiliarias"
              />             
            </b-col>
          </b-row>
          <hr class="bg-secundario pt-1">
        </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style lang="scss" scoped>
.bghero-parallax {
  height: 100vh;
  background: url("~@/assets/heromd.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}



@media only screen and (max-width: 992px) {
.bghero-parallax {
  height: 100vh;
  background: url("~@/assets/herosm.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: initial;
}
} 

</style>
