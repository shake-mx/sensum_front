<template>
  <b-container>
    <b-row class="text-center my-5" data-aos="fade-up" data-aos-duration="3000">
      <b-col class="curva  px-5 py-3">
        <h1 class=" color-secundario text-uppercase">
          <strong>Relevantes</strong>
        </h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="mx-auto">
        <template>
          <carousel
            data-aos="fade-up"
            data-aos-duration="3000"
            :paginationEnabled="true"
            :perPageCustom="[
              [0, 1],
              [576, 2],
              [1024, 3],
            ]"
            :mouseDrag="false"
            :touchDrag="false"
            :centerMode="true"
            :paginationColor="'#03989E'"
            :paginationActiveColor="'#545454'"
            autoplay
            loop
            :autoplayTimeout="5000"
            easing="ease-in"
            id="inicioCatalogo"
          >
            <slide
              refs="slide"
              class="my-5 "
              v-for="relevante in relevantes"
              :key="relevante.id"
            >
              <b-card
                data-aos="fade-up"
                data-aos-duration="3000"
                :title="relevante.nombre_propiedad"
                :sub-title="relevante.direccion"
                class="curva sombra my-3 mx-3"
                footer-tag="footer"
              >
                <template v-if="relevante.imagenes == 0">
              <b-card-img-lazy
                class="imagen-card"
                blank
                blank-color="#050A30"
                top
                :src="require('@/assets/logo.png')"
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
                :src="relevante.imagenes[0].imagen"
                :alt="relevante.nombre_propiedad"
              >
              </b-card-img-lazy>
            </template>
                <template>
                  <div v-for="rel in relevante.amenidades" :key="rel.id">
                    <template v-if="rel.nombre.includes('destacado')">
                      <div class="oferta ">
                        <img
                          :alt="rel.nombre"
                          :src="rel.icono"
                          class="bg-info"
                        />
                      </div>
                    </template>
                    <template
                      v-if="
                        rel.nombre.includes('oferta') ||
                          rel.nombre.includes('preventa') ||
                          rel.nombre.includes('entrega')
                      "
                    >
                      <div class="tipoOferta ">
                        <img
                          :alt="rel.nombre"
                          :src="rel.icono"
                          class="bg-info"
                        />
                      </div>
                    </template>
                  </div>
                </template>
                <b-card-body class="p-0">
                  <b-card-text class="precio">
                    $ {{ relevante.precio.toLocaleString("es-MX") }} MXN
                  </b-card-text>
                </b-card-body>
                <b-card-body>
                  <b-card-text>
                    <p class="descripcion">
                      <font-awesome-icon
                        icon="quote-left"
                        class="color-secundario legible sombra mr-1"
                      />{{ relevante.subtitulo }}
                      <font-awesome-icon
                        icon="quote-right"
                        class="color-secundario legible sombra ml-1"
                      />
                    </p>
                  </b-card-text>
                </b-card-body>
                <b-card-body class="p-0 mx-0 ">
                  <b-container class="px-1">
                    <b-row>
                      <b-col cols="3" class="my-0 text-center">
                        <p>
                          <font-awesome-icon
                            icon="cubes"
                            size="lg"
                            class="color-secundario legible"
                          />
                          <span class="mx-0" style="">
                            {{ relevante.construccion_metros.toLocaleString() }}
                            m²
                          </span>
                        </p>
                      </b-col>
                      <b-col cols="3" class="my-0 text-center">
                        <p>
                          <font-awesome-icon
                            icon="bed"
                            size="lg"
                            class="color-secundario legible"
                          /><span class="mx-1">
                            {{
                              relevante.recamaras_con_closet +
                                relevante.recamaras_sin_closet
                            }}</span
                          >
                        </p>
                      </b-col>
                      <b-col cols="3" class="my-0 text-center">
                        <p>
                          <font-awesome-icon
                            icon="bath"
                            size="lg"
                            class="color-secundario legible"
                          />
                          <span class="mx-1">
                            {{
                              relevante.bano_completo + relevante.medio_bano / 2
                            }}
                          </span>
                        </p>
                      </b-col>
                      <b-col cols="3" class="my-0 text-center">
                        <p>
                          <font-awesome-icon
                            icon="car"
                            size="lg"
                            class="color-secundario legible"
                          />
                          <span class="mx-1"> 2</span>
                        </p>
                      </b-col>
                    </b-row>
                  </b-container>
                </b-card-body>

              </b-card>
            </slide>
          </carousel>
        </template>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import sensumService from "@/services/sensumService.js";
export default {
  name: "Relevantes",
  data() {
    return {
      relevantes: [],
    };
  },
  mounted() {
    sensumService.getPropiedades().then((response) => {
      this.relevantes = response.data.filter((amenidad) => {
        return amenidad.amenidades.length > 0;
      });
    });
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

.flotante {
  position: fixed;
  right: 0;
  top: 20%;
  z-index: 9999;
  transform: translate(0px, -50%);
  text-align: center;
}

::v-deep.oferta {
  position: absolute !important;
  top: 10px !important;
  right: 0 !important;
  padding: 1.25rem !important;
  border-radius: calc(0.25rem - 1px) !important;
  background-color: rgba($color: $secundario, $alpha: 0.9) !important;
  max-width: 5rem;
}

::v-deep.tipoOferta {
  position: absolute !important;
  top: 10px !important;
  left: 0 !important;
  padding: 1.25rem !important;
  border-radius: calc(0.25rem - 1px) !important;
  background-color: rgba($color: $gris, $alpha: 0.9) !important;
  max-width: 5rem;
}
</style>
