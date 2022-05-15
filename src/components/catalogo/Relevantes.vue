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
      <template v-if="relevantes.length > 0">
        <b-col cols="12" class="mx-auto">
          <carousel
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
              v-for="relevante in destacado"
              :key="relevante.id"
            >
             <router-link  :to="{ path: `/catalogo/${relevante.folio}` }">
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
                    :src="relevante.imagenes[0].imagen"
                    :alt="relevante.nombre_propiedad"
                  >
                  </b-card-img-lazy>
                </template>
                <template>
                  <div v-for="rel in relevante.amenidades" :key="rel.id">
                    <template v-if="rel.nombre.includes('destacado')">
                      <div>
                        <img
                          :alt="rel.nombre"
                          :src="rel.icono"
                          class="oferta"
                        />
                      </div>
                    </template>
                    <template v-if="rel.nombre.includes('oferta')">
                      <div>
                        <img
                          :alt="rel.nombre"
                          :src="rel.icono"
                          class="tipoOferta"
                        />
                      </div>
                    </template>
                    <template v-else-if="rel.nombre.includes('preventa')">
                      <div class="tipoPreventa">
                        <img
                          :alt="rel.nombre"
                          :src="rel.icono"
                          class="tipoPreventa"
                        />
                      </div>
                    </template>
                    <template v-else-if="rel.nombre.includes('entrega')">
                      <div class="tipoEntrega">
                        <img
                          :alt="rel.nombre"
                          :src="rel.icono"
                          class="tipoEntrega"
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
                          <span class="mx-1"> {{relevante.estacionamiento}}</span>
                        </p>
                      </b-col>
                    </b-row>
                  </b-container>
                </b-card-body>
              </b-card>
               </router-link>
          <div v-if="mostrarModalRel" class="modal-route " style="overflow:scroll">
            <router-view :destacado="destacado"> </router-view>
          </div>

            </slide>
          </carousel>
        </b-col>
      </template>
      <template v-else>
        <b-container class="py-3" data-aos="fade-up" data-aos-duration="3000">
          <b-row class="text-center bg-hero curva">
            <b-col cols="12" class="py-3">
              <h3 class=" color-gris">
                Por el momento no contamos con una propiedad relevante, en
                Sensum somos profesionales que siempre aportaremos valor a tu
                búsqueda puedes consultar nuestro catalogo de propiedades para
                conocer nuestra oferta
              </h3>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Relevantes",
  props: ["relevantes"],
  computed: {
    destacado() {
      return this.relevantes.filter((propiedad) => {
        return propiedad.amenidades.find((amenidad) => {
          return amenidad.nombre.includes("destacado");
        });
      });
    },
  },
  data() {
    return {
      mostrarModalRel: false,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function(newVal) {
        this.mostrarModalRel = newVal.meta && newVal.meta.mostrarModalRel;
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
  top: 20% !important;
  right: 0 !important;
  border-radius: calc(0.25rem - 1px) !important;
  max-width: 7rem;
}

::v-deep.tipoOferta {
  position: absolute !important;
  top: 20% !important;
  left: 0 !important;
  border-radius: calc(0.25rem - 1px) !important;
  max-width: 7rem;
}
::v-deep.tipoPreventa {
  position: absolute !important;
  top: 30% !important;
  left: 0 !important;
  border-radius: calc(0.25rem - 1px) !important;
  max-width: 7rem;
}
::v-deep.tipoEntrega {
  position: absolute !important;
  top: 40% !important;
  left: 0 !important;
  border-radius: calc(0.25rem - 1px) !important;
  max-width: 7rem;
}
</style>
