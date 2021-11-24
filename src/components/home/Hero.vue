<template>
  <b-container fluid class="bghero-parallax vertical-center">
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
  background: url("~@/assets/hero.png");
  background-repeat: no-repeat;
  background-position: 75% 50%;
  background-size: cover;
  background-attachment: fixed;
}
</style>
