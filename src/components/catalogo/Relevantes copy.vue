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
              class="my-5"
              v-for="relevante in relevantes"
              :key="relevante.id"
            >
            <template v-if="relevante.amenidades.length >0">
              <b-container fluid class="p-0 m-0">
                <b-row class="justify-content-center">
                  <b-col cols="12" class="text-center">
                    <h1 class="color-secundario">
                      <strong>
                        <font-awesome-icon
                          icon="exclamation-circle"
                          size="3x"
                          class="color-secundario legible sombra"
                        />
                      </strong>
                    </h1>
                    <h4 class="color-secundario">
                      No hay información disponible
                    </h4>
                  </b-col>
                </b-row>
              </b-container>
            </template>
            <template v-else>
              <b-card
                data-aos="fade-up"
                data-aos-duration="3000"
                :img-src="relevante.imagenes[0].imagen"
                :img-alt="relevante.nombre_propiedad"
                img-top
                :title="relevante.nombre_propiedad"
                :sub-title="relevante.direccion"
                class="destacado curva sombra my-3 mx-3"
                footer-tag="footer"
              > 
              
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
                            {{ relevante.construccion_metros.toLocaleString() }}
                            m²
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
                              relevante.recamaras_con_closet +
                                relevante.recamaras_sin_closet
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
                            {{
                              relevante.bano_completo + relevante.medio_bano / 2
                            }}
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
                          {{ relevante.agente.nombre }}
                        </h5>
                        <!-- <h6 class="color-texto ml-1">{{propiedad.agente.correo}}</h6>
                  <h6 class="color-texto ml-1">{{propiedad.agente.telefono}}</h6> -->
                      </b-col>
                      <b-col cols="5" class="p-0 m-0" align="center">
                        <b-avatar
                          :src="relevante.agente.foto"
                          size="5rem"
                        ></b-avatar>
                      </b-col>
                      <b-col cols="12" class="py-2">
                        <b-button
                          :href="
                            `https://wa.me/521${relevante.agente.telefono}?text=Información%20de%20la%20propiedad%20${relevante.nombre_sensum}`
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
              </template>
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
      oferta: "oferta",
    };
  },
  mounted() {
    sensumService
      .getPropiedades()
      .then((relevantes) => (this.relevantes = relevantes.data));
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
