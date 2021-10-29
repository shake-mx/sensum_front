<template>
    
    <b-container fluid class="bghero-parallax vertical-center">
        <b-container>
            <b-row class="text-right ">
                <b-col md="8" class="bg-hero py-4 px-4 curva">
                    <h3 class="display-5 color-secundario">
                        <strong>"Los logros de una organización son los resultados del esfuerzo combinado de cada individuo" </strong>
                    </h3>
                    <h1 class="display-2 text-uppercase">
                        <strong>Soluciones Inmobiliarias</strong>
                    </h1>
                    <h2 class="display-4">
                        Profesionales en cada área de especialidad del campo inmobiliario
                    </h2>
                    <b-row class="justify-content-end">
                        <b-col cols="6">
                    <b-button  target="_blank" block class="bg-secundario curva" size="lg" href="https://wa.me/5215566286715?text=Quiero%20ayuda%20inmobiliaria%20">
                        <b-icon icon="arrow-right"></b-icon>
                        <span>   Hablémos ahora</span></b-button>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
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
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
</style>