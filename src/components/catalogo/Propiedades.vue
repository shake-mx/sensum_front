<template>
  <b-container>
    <b-row class="text-center my-5" data-aos="fade-up" data-aos-duration="3000">
      <b-col class="curva  px-5 py-3">
        <h1 class=" color-secundario text-uppercase">
          <strong>Propiedades</strong>
        </h1>
      </b-col>
    </b-row>
    <template v-if="propiedades.length > 0">
      <b-row>
        <b-col
          cols="12"
          md="6"
          lg="4"
          class="mx-auto"
          v-for="propiedad in propiedades"
          :key="propiedad.id"
        >
          <router-link :to="{ path: `/catalogo/${propiedad.folio}` ,params: { id: 'folio' }}">
            <b-card
              data-aos="fade-up"
              data-aos-duration="3000"
              :title="propiedad.nombre_propiedad"
              :sub-title="propiedad.direccion"
              class=" curva sombra my-3 tarjeta-propiedad"
              footer-tag="footer"
            >
              <template v-if="propiedad.imagenes == 0">
                <b-card-img-lazy
                  class="imagen-card"
                  blank
                  blank-color="#03989E"
                  top
                  :src="require('@/assets/load_house.jpg')"
                  aly="Propiedad Sensum"
                >
                </b-card-img-lazy>
              </template>
              <template v-else>
                <b-card-img-lazy
                  class="imagen-card"
                  blank
                  blank-color="#03989E"
                  top
                  :src="propiedad.imagenes[0].imagen"
                  :alt="propiedad.nombre_propiedad"
                >
                </b-card-img-lazy>
              </template>

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
                      class="color-secundario legible sombra mr-1"
                    />{{ propiedad.subtitulo }}
                    <font-awesome-icon
                      icon="quote-right"
                      class="color-secundario legible sombra ml-1"
                    />
                  </p>
                </b-card-text>
              </b-card-body>
              <b-card-body class="p-0 mx-0">
                <b-container class="px-1">
                  <b-row>
                    <b-col cols="3" class=" text-center">
                      <p>
                        <font-awesome-icon
                          icon="cubes"
                          size="lg"
                          class="color-secundario legible "
                        />
                        <span class="mx-0" style="">
                          {{ propiedad.construccion_metros.toLocaleString() }}
                          m²
                        </span>
                      </p>
                    </b-col>
                    <b-col cols="3" class=" text-center">
                      <p>
                        <font-awesome-icon
                          icon="bed"
                          size="lg"
                          class="color-secundario legible "
                        /><span class="mx-1">
                          {{
                            propiedad.recamaras_con_closet +
                              propiedad.recamaras_sin_closet
                          }}</span
                        >
                      </p>
                    </b-col>
                    <b-col cols="3" class=" text-center">
                      <p>
                        <font-awesome-icon
                          icon="bath"
                          size="lg"
                          class="color-secundario legible "
                        />
                        <span class="mx-1">
                          {{
                            propiedad.bano_completo + propiedad.medio_bano / 2
                          }}
                       
                        </span>
                      </p>
                    </b-col>
                    <b-col cols="3" class=" text-center">
                    <p>
                      <font-awesome-icon
                        icon="car"
                        size="lg"
                        class="color-secundario legible "
                      />
                      <span class="mx-1">{{propiedad.estacionamiento}} </span>
                    </p>
                  </b-col>
                  </b-row>
                </b-container>
              </b-card-body>
            </b-card>
          </router-link>
          <div v-if="mostrarModal" class="modal-route " style="overflow:scroll">
            <router-view :propiedades="propiedades"> </router-view>
          </div>
        </b-col>
      </b-row>
    </template>
    <template v-else>
      <b-container data-aos="fade-up" data-aos-duration="3000">
        <b-row>
          <b-col class="text-center">
            <h3 class="color-primario">
              Por el momento no hemos encontrado una propiedad con los valores
              que buscas. Envía un correo con la propiedad que estas buscando.
            </h3>
          </b-col>
        </b-row>
      </b-container>
      <Contacto />
    </template>
  </b-container>
</template>

<script>
import Contacto from "@/components/Contacto";
export default {
  name: "Propiedades",
  components: {
    Contacto,
  },
  props: ["propiedades"],
  data() {
    return {
      mostrarModal: false,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function(newVal) {
        this.mostrarModal = newVal.meta && newVal.meta.mostrarModal;
      },
    },
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
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 3rem;
}

.card-img-top {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
}

.card-footer {
  background-color: rgba($color: $secundario, $alpha: 1);
  padding: 0px;
  margin: 0px;
  border-radius: 0px 0px 15px 15px;
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
