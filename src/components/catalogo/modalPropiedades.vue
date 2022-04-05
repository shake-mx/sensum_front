<template>
  <div class="bg-fondo modal-borde ">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-row>
            <b-col class="titulo-modal" offset="2" cols="8">
              <h3 class="color-secundario tipoA">
                <b> {{ filtro.tipo_anuncio }} </b>
              </h3>
              <h3 class="color-primario ">{{ filtro.nombre_propiedad }}</h3>
              <hr class="bg-secundario" />
            </b-col>
            <b-col cols="2" class=" text-right">
              <router-link to="./">
                <font-awesome-icon
                  class="color-secundario  mt-2"
                  role="button"
                  size="3x"
                  :icon="['fas', 'times']"
                />
              </router-link>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12" class="mx-auto p-0 ">
              <b-carousel
                fade
                indicators
                controls
                img-width="800"
                img-height="800"
              >
                <template v-if="filtro.imagenes != 0">
                  <b-carousel-slide
                    v-for="imagen in filtro.imagenes"
                    :key="imagen.id"
                    :img-src="imagen.imagen"
                  ></b-carousel-slide>
                </template>
                <template v-else>
                  <b-carousel-slide
                    :img-src="require('@/assets/load_house.jpg')"
                  ></b-carousel-slide>
                </template>
              </b-carousel>
            </b-col>
            <b-col md="6" class="p-0 ">
              <b-row class="p-0 m-0 h-100">
                <b-col md="12" class="">
                  <b-row class="h-100" align-v="center">
                    <b-col md="12" class="my-3">
                      <h3 class="color-secundario">
                        Precio<br />
                        <span class="mx-0 font-weight-bolder">
                          $
                          {{
                            filtro ? filtro.precio.toLocaleString("es-MX") : ""
                          }}
                          MXN
                        </span>
                      </h3>
                    </b-col>
                    <b-col class="my-3">
                      <h5>
                        <font-awesome-icon
                          icon="cubes"
                          size="2x"
                          class="color-secundario legible "
                        />
                        <span class="mx-0">
                          {{
                            filtro
                              ? filtro.construccion_metros.toLocaleString()
                              : ""
                          }}
                          m²
                        </span>
                      </h5>
                    </b-col>
                    <b-col>
                      <h5>
                        <font-awesome-icon
                          icon="bed"
                          size="2x"
                          class="color-secundario legible "
                        /><span class="mx-1">
                          {{
                            filtro.recamaras_con_closet +
                              filtro.recamaras_sin_closet
                          }}</span
                        >
                      </h5>
                    </b-col>
                    <b-col>
                      <h5>
                        <font-awesome-icon
                          icon="bath"
                          size="2x"
                          class="color-secundario legible "
                        />
                        <span class="mx-1">
                          {{ filtro.bano_completo + filtro.medio_bano / 2 }}
                        </span>
                      </h5>
                    </b-col>
                    <b-col cols="12" class="my-3">
                      <h5 class="color-primario">
                        <font-awesome-icon
                          icon="quote-left"
                          class="color-secundario legible sombra mr-1"
                        />{{ filtro.descripción }}
                        <font-awesome-icon
                          icon="quote-right"
                          class="color-secundario legible sombra ml-1"
                        />
                      </h5>
                    </b-col>
                    <b-col md="12" class="my-3">
                      <h5 class="color-primario ">
                        <font-awesome-icon
                          icon="map-marked-alt"
                          size="2x"
                          class="color-secundario legible"
                        />
                        <span class="mx-1 font-weight-bolder">
                          {{ filtro.direccion }}
                        </span>
                      </h5>
                    </b-col>
                    <b-col md="12" class="my-3">
                      <h5 class="color-primario ">
                        <font-awesome-icon
                          icon="clipboard-check"
                          size="2x"
                          class="color-secundario mx-1 legible"
                        />
                        <span class="ml-2 font-weight-bolder">
                          {{
                            "La propiedad tiene una longitud de " +
                              (filtro
                                ? filtro.terreno_metros.toLocaleString()
                                : "" + " m² de superficie, ") +
                              "de los cuales " +
                              (filtro
                                ? filtro.construccion_metros.toLocaleString()
                                : "" + " m² son de construcción. ") +
                              "Cuenta con " +
                              filtro.niveles +
                              " nivel(es) " +
                              "y su uso de suelo es " +
                              (usoSuelo + ".")
                          }}
                          <br />{{
                            "Principales características: " +
                              (filtro.sala ? "Sala, " : "") +
                              (filtro.comedor ? "Comedor, " : "") +
                              (filtro.cocina ? "Cocina, " : "") +
                              (filtro.vestidor ? "Vestidor, " : "") +
                              (filtro.jardin ? "Jardín, " : "") +
                              (filtro.roof_garden ? "Roof Garden, " : "") +
                              (filtro.cisterna ? "Cisterna, " : "") +
                              (filtro.tinaco ? "Tinaco, " : "") +
                              (filtro.alberca ? "Alberca, " : "") +
                              (filtro.ludoteca ? "Ludoteca, " : "") +
                              (filtro.gimnasio ? "Gimnasio, " : "") +
                              "para mayor infromación consultar con el Profesional Inmobiliario."
                          }}
                          <br />
                          <br />
                          <span class="color-secundario">
                            "Sensum Soluciones Inmobiliarias con Sentido Humano"
                          </span>
                        </span>
                      </h5>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
            <b-col md="6" class="bg-secundario p-0 m-0 " align-self="stretch">
              <b-row class="p-0 m-0 h-100">
                <b-col cols="12" class="mt-3" align="center">
                  <template v-if="filtro ? filtro.agente.foto : ''">
                    <b-avatar :src="filtro.agente.foto" size="10rem"></b-avatar>
                  </template>
                  <template v-else>
                    <b-avatar
                      :src="require('@/assets/ava.jpg')"
                      size="10rem"
                    ></b-avatar>
                  </template>
                </b-col>
                <b-col cols="12" class="mt-3">
                  <h5 class="color-texto text-center ">
                    <font-awesome-icon
                      class="color-acento espacio mr-3"
                      size="lg"
                      :icon="['fas', 'user']"
                    />
                    {{ filtro ? filtro.agente.nombre : "" }}
                  </h5>
                  <h5 class="color-texto text-center ">
                    <font-awesome-icon
                      class="color-acento espacio mr-3"
                      size="lg"
                      :icon="['fab', 'whatsapp']"
                    />
                    {{ formatPhoneNumber }}
                  </h5>
                  <h5 class="color-texto text-center ">
                    <font-awesome-icon
                      class="color-acento espacio mr-3"
                      size="lg"
                      :icon="['fas', 'envelope']"
                    />
                    {{ filtro ? filtro.agente.correo : "informes@sensum.mx" }}
                  </h5>
                </b-col>

                <b-col cols="8" class="mt-3 mx-auto">
                  <b-button
                    :href="
                      `https://wa.me/521${
                        filtro ? filtro.agente.telefono : '5630296930'
                      }?text=Información%20de%20la%20propiedad%20${
                        filtro.nombre_sensum
                      }`
                    "
                    target="blank"
                    class="filtro-informes w-100 text-center"
                    ><strong>Solicitar Informes</strong></b-button
                  >
                </b-col>
                <b-col cols="12" class="text-right" align-self="end">
                  <router-link to="./">
                    <font-awesome-icon
                      class="color-texto  mt-2"
                      role="button"
                      size="3x"
                      :icon="['fas', 'times']"
                    />
                  </router-link>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ModalPropiedades",
  props: ["propiedades", "folio"],
  data() {
    return {
      propiedad: "",
      find: [],
      phoneNumberString: "",
    };
  },
  computed: {
    filtro() {
      return this.propiedades
        ? this.propiedades.find((propiedad) => propiedad.folio === this.folio)
        : "";
    },
    formatPhoneNumber(phoneNumberString) {
      phoneNumberString = this.filtro
        ? this.filtro.agente.telefono
        : "5630296930";
      var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
      var match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);
      if (match) {
        return "(" + match[1] + ") " + match[2] + " " + match[3];
      }
      return null;
    },
    usoSuelo() {
      if (this.filtro.uso_de_suelo == "R") {
        return "Habitacional";
      } else if (this.filtro.uso_de_suelo == "C") {
        return "Comercial";
      } else if (this.filtro.uso_de_suelo == "M") {
        return "Mixto";
      }
      return null;
    },
  },
 metaInfo(){
   return {
      title: this.filtro.nombre_propiedad,
      meta: [
        {
          name: "description",
          content: this.filtro.descripción,
        },
        {
          name: 'image',
          content: this.filtro.imagenes[0].imagen,
        },
        {
          name: 'property',
          content: "Sensum Soluciones Inmobiliarias con Sentido Humano",
        }
      ],
    };
   }
};
</script>

<style lang="scss" scoped>
span {
  color: $primario;
}

.navAgente {
  max-width: 100px;
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

.tipoA{
 font-size: 3rem;
 color: $secundario;
 opacity: 0.9;
}
</style>
