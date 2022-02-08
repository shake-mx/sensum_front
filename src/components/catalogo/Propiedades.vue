<template>
  <b-container>
    <b-row class="text-center my-5" data-aos="fade-up" data-aos-duration="3000">
      <b-col class="curva  px-5 py-3">
        <h1 class=" color-secundario text-uppercase">
          <strong>Propiedades</strong>
        </h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        cols="12"
        md="6"
        lg="4"
        class="mx-auto"
        v-for="propiedad in propiedades"
        :key="propiedad.id"
      >
        <b-card
          data-aos="fade-up"
          data-aos-duration="3000"
          :img-src="propiedad.imagenes[0].imagen"
          :img-alt="propiedad.nombre_propiedad"
          img-top
          :title="propiedad.nombre_propiedad"
          :sub-title="propiedad.direccion"
          class="destacado curva sombra my-3"
          footer-tag="footer"
        >
          <b-card-body class="p-0">
            <b-card-text class="precio">
              $ {{ propiedad.precio.toLocaleString("es-MX") }} MXN
            </b-card-text>
          </b-card-body>
          <b-card-body>
            <b-card-text>
              <p class="descripcion">
                <font-awesome-icon
                  icon="quote-left"
                  size="md"
                  class="color-secundario legible sombra mr-1"
                />{{ propiedad.subtitulo }}
                <font-awesome-icon
                  icon="quote-right"
                  size="md"
                  class="color-secundario legible sombra ml-1"
                />
              </p>
            </b-card-text>
          </b-card-body>
          <b-card-body class="p-0 mx-0 mb-2">
            <b-container class="px-1">
              <b-row>
                <b-col cols="3" class="my-3 text-center">
                  <p>
                    <font-awesome-icon
                      icon="cubes"
                      size="lg"
                      class="color-secundario legible sombra"
                    />
                    <span class="mx-0" style="">
                      {{ propiedad.construccion_metros.toLocaleString() }} m²
                    </span>
                  </p>
                </b-col>
                <b-col cols="3" class="my-3 text-center">
                  <p>
                    <font-awesome-icon
                      icon="bed"
                      size="lg"
                      class="color-secundario legible sombra"
                    /><span class="mx-1">
                      {{
                        propiedad.recamaras_con_closet +
                          propiedad.recamaras_sin_closet
                      }}</span
                    >
                  </p>
                </b-col>
                <b-col cols="3" class="my-3 text-center">
                  <p>
                    <font-awesome-icon
                      icon="bath"
                      size="lg"
                      class="color-secundario legible sombra"
                    />
                    <span class="mx-1">
                      {{ propiedad.bano_completo + propiedad.medio_bano / 2 }}
                    </span>
                  </p>
                </b-col>
                <b-col cols="3" class="my-3 text-center">
                  <p>
                    <font-awesome-icon
                      icon="car"
                      size="lg"
                      class="color-secundario legible sombra"
                    />
                    <span class="mx-1"> 2</span>
                  </p>
                </b-col>
              </b-row>
            </b-container>
          </b-card-body>

          <template #footer>
            <b-container>
              <b-row>
                <b-col cols="7" class="pt-1  my-auto">
                  <h5 class="color-texto ml-1 ">
                    {{ propiedad.agente.nombre }}
                  </h5>
                  <!-- <h6 class="color-texto ml-1">{{propiedad.agente.correo}}</h6>
                  <h6 class="color-texto ml-1">{{propiedad.agente.telefono}}</h6> -->
                </b-col>
                <b-col cols="5" class="p-0 m-0" align="center">
                  <b-avatar :src="propiedad.agente.foto" size="5rem"></b-avatar>
                </b-col>
                <b-col cols="12" class="py-2">
                  <b-button
                    :href="
                      `https://wa.me/521${propiedad.agente.telefono}?text=Información%20de%20la%20propiedad%20${propiedad.nombre_sensum}`
                    "
                    target="blank"
                    class="filtro-informes w-100 "
                    ><strong>Solicitar Informes</strong></b-button
                  >
                </b-col>
              </b-row>
            </b-container>
          </template>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import sensumService from "@/services/sensumService.js";
export default {
  name: "Propiedades",
  data() {
    return {
      propiedades: [],
    };
  },
  mounted() {
    sensumService
      .getPropiedades()
      .then((propiedades) => (this.propiedades = propiedades.data));
  },
};
</script>

<style lang="scss" scoped>

.card-title {
  color: $secundario !important;
  font-weight: 600;
  font-size: 1.8rem;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 4.5rem;
}
.card-subtitle {
  color: rgba($color: $secundario, $alpha: 0.6) !important;
  font-size: 1.2rem;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 5rem;
}

.card-img-top {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px 15px 0px 0px;
}

.card-footer {
  background-color: rgba($color: $secundario, $alpha: 1);
  padding: 0px;
  margin: 0px;
}

::v-deep .precio {
  color: rgba($color: $gris, $alpha: 0.95) !important;
  font-size: 1.6rem;
}

::v-deep .descripcion {
  color: $primario !important;
  display: -webkit-box !important;
  max-width: 100% !important;
  -webkit-line-clamp: 3 !important;
  -webkit-box-orient: vertical !important;
  overflow: hidden !important;
  height: 4.5rem !important;
  white-space: initial !important;
  line-height: 1.5 !important;
}

p {
  color: $gris !important;
  white-space: nowrap !important;
}

.filtro-informes {
  padding: 0.3rem 3rem;
  font-size: larger;
  border-radius: 0.5rem;
  background-color: $fondo !important;
  color: $secundario !important;
  border: none;
  box-shadow: 0px 15px 20px rgba($color: $gris, $alpha: 0.25);
  font-weight: 500;
  transition: all 0.5s ease;
}

.filtro-informes:hover,
.filtro-informes:focus,
.filtro-informes:active,
.filtro-informes:focus-visible {
  background-color: $secundario !important;
  color: $fondo !important;
  outline: 0 !important;
  transition: all 0.5s ease;
  transform: translateY(-2px);
  border-color: $fondo !important;
}
</style>
