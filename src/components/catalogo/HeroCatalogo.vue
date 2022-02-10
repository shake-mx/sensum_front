<template>
  <div>
    <carousel
      :paginationEnabled="false"
      :perPage="1"
      :mouseDrag="false"
      :touchDrag="false"
      autoplay
      loop
      :autoplayHoverPause="false"
      :autoplayTimeout="5000"
      easing="ease-in"
      id="inicioCatalogo"
      class="catalogo"
    >
      <slide refs="slide">
        <b-container fluid class="p-0 m-0 cocina"> </b-container>
      </slide>
      <slide>
        <b-container fluid class="p-0 m-0 sala"> </b-container>
      </slide>
      <slide>
        <b-container fluid class="p-0 m-0 recamara"> </b-container>
      </slide>
    </carousel>
    <b-container
      class="postit legible"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <b-row>
        <b-col cols="8" offset="2" class=" py-1">
          <h4 class="color-secundario">
            Soluciones Inmobiliarias con Sentido Humano
          </h4>
        </b-col>
        <b-col cols="2">
          <font-awesome-icon
            icon="map-marked-alt"
            v-b-modal.modal-mapa
            size="2x"
            class="color-secundario legible sombra"
          />
        </b-col>
      </b-row>

      <b-row class="justify-content-center  mx-auto">
        <b-col cols="6" class="my-3">
          <b-button
            class="filtro-boton"
            @click="filtroVenta"
            :pressed.sync="setVenta"
            >Venta</b-button
          >
        </b-col>
        <b-col cols="6" class="my-3">
          <b-button
            class="filtro-boton"
            @click="filtroRenta"
            :pressed.sync="setRenta"
            >Renta</b-button
          >
        </b-col>
      </b-row>

      <b-row class="mx-auto">
        <b-col cols="12" class="my-auto ">
          <DoubleRangeSlider
            class="w-75 mx-auto"
            v-if="renderComponent"
            :min="min"
            :max="max"
            @update:min="(value) => (min = value)"
            @update:max="(value) => (max = value)"
          ></DoubleRangeSlider>

          <b-row>
            <b-col cols="4" class="text-center"
              ><h6 class="rangos d-inline">$0.00</h6></b-col
            >
            <b-col offset="4" cols="4" class="text-center"
              ><h6 class="rangos d-inline">$20,000,000</h6></b-col
            >
          </b-row>
        </b-col>
      
      <template v-if="buscarAnuncio === 'Anuncio'">
        <b-col cols="12" class="mx-auto mt-1 ">
          <b-form-group block variant="primary" class="my-2">
            <small class="text-muted color-rojo"
                  >Selecciona tipo de anuncio que buscas Venta o Renta</small
                >
            <b-form-select
            disabled
              :options="tipoPropiedad"
              v-model="propiedadCatalogo"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </template>
      <template v-else>
        <b-col cols="12" class="mx-auto mt-1 ">
          <b-form-group block variant="primary" class="my-2">
            <b-form-select
            
              :options="tipoPropiedad"
              v-model="propiedadCatalogo"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </template>

        

        <b-col cols="12" class="mt-3">
          <h4 class="rango mx-auto">
            <strong> Rango de Precio</strong> entre
            <strong
              >${{
                min.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }}</strong
            >
            y
            <strong
              >${{
                max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }}</strong
            >
          </h4>
        </b-col>
      </b-row>
      <b-row class="w-75 mx-auto mt-0">
        <b-col cols="6" class="mt-1 mx-auto  px-2">
          <h4 class="valores mx-auto">
            <strong>{{ buscarAnuncio }}</strong>
          </h4>
        </b-col>
        <b-col cols="6" class="mt-1 mx-auto px-2">
          <h4 class="valores mx-auto">
            <strong>{{ propiedadCatalogo }}</strong>
          </h4>
        </b-col>
      </b-row>
      <b-row>
        <template v-if="  propiedadCatalogo === 'Propiedad'" >
        <b-col cols="12" class="mt-2">
          <small class="text-muted color-rojo"
                  >Selecciona tipo de propiedad que buscas</small
                >
          <b-button class="filtro-buscar-des w-75" disabled 
            ><strong>Buscar</strong></b-button
          >
        </b-col>
        </template>
         <template v-else >
        <b-col cols="12" class="mt-2">
          <b-button class="filtro-buscar w-75"  @click="filtroGlobal"
            ><strong>Buscar</strong></b-button
          >
        </b-col>
        </template>
        <b-col cols="12" class="my-1">
          <b-button class="filtro-reset w-75" @click="sinGlobal"
            ><strong>Todas las Propiedades</strong></b-button
          >
        </b-col>
      </b-row>
    </b-container>
    <b-modal
      title="Ubica tu propiedad"
      scrollable
      hide-footer
      id="modal-mapa"
      size="xl"
    >
      <b-container>
        <b-row>
          <b-col class="text-center">
            <h1 class="color-secundario text-center">PROXIMAMENTE</h1>
            <h4 class="color-primario text-center">
              En estos momentos no podemos ofrecerte esta funcionalidad, pero pronto estaremos
              implementando esta funcionalidad.</h4>
            <font-awesome-icon size="6x" :icon="['fab', 'angellist']"  class="color-secundario"/>
            
          </b-col>
        </b-row>
      </b-container>
      


    </b-modal>
  </div>
</template>

<script>
import DoubleRangeSlider from "@/components/catalogo/Slider";
export default {
  name: "HeroCatalogo",
  data() {
    return {
      buscarRenta: "",
      buscarVenta: "",
      buscarAnuncio: "Anuncio",
      setRenta: false,
      setVenta: false,
      sinFiltro: false,
      tipoPropiedad: [
        { text: "Propiedad", value:"Propiedad" },
        { text: "Casa", value: "Casa" },
        { text: "Departamento", value: "Departamento" },
        { text: "Oficina", value: "Oficina" },
        { text: "Remate", value: "Remate" },
        { text: "Terreno", value: "Terreno" },
      ],
      propiedadCatalogo: "Propiedad",
      min: 5000000,
      max: 15000000,
      renderComponent: true,
    };
  },
  components: {
    DoubleRangeSlider,
  },
  
  methods: {
    filtroRenta() {
      this.buscarAnuncio = "Renta";
      this.buscarRenta = "Renta";
      this.setVenta = false;
      this.buscarVenta = "";
    },
    filtroVenta() {
      this.buscarAnuncio = "Venta";
      this.buscarVenta = "Venta";
      this.setRenta = false;
      this.buscarRenta = "";
    },
    filtroGlobal() {
      this.$emit("filtroPropiedad", {
        buscarAnuncio: this.buscarAnuncio,
        buscarRenta: this.buscarRenta,
        buscarVenta: this.buscarVenta,
        propiedadCatalogo: this.propiedadCatalogo,
        min: this.min,
        max: this.max,
      });
    },
    sinGlobal() {
      this.setRenta = false;
      this.setVenta = false;
      this.buscarAnuncio = "Anuncio";
      this.buscarRenta = "";
      this.buscarVenta = "";
      this.propiedadCatalogo = "Propiedad";
      this.min = 5000000;
      this.max = 15000000;
      this.sinFiltro = true;
      this.$emit("filtroPropiedad", {
        buscarAnuncio: this.buscarAnuncio,
        buscarRenta: this.buscarRenta,
        buscarVenta: this.buscarVenta,
        propiedadCatalogo: this.propiedadCatalogo,
        min: this.min,
        max: this.max,
        sinFiltro: this.sinFiltro,
      });
      this.renderComponent = false;

      this.$nextTick(() => {
        // Add the component back in
        this.renderComponent = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.cocina {
  height: 75vh;
  background: url("~@/assets/catalogo/cocina.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: initial;
}
.sala {
  height: 75vh;
  background: url("~@/assets/catalogo/sala.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: initial;
}
.recamara {
  height: 75vh;
  background: url("~@/assets/catalogo/recamara.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: initial;
}

.catalogo {
  position: relative;
}

.postit {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 30%;
  text-align: center;
  background-color: rgba($color: $fondo, $alpha: 0.75);
  border-radius: 15px;
  padding: 5px 20px;
  height: auto;
  width: 45rem;
  box-shadow: 0px 15px 20px rgba($color: $gris, $alpha: 0.25);
}

@media only screen and (max-width: 576px) {
  .postit {
    top: 20%;
    bottom: 0;
    height: auto;
    width: 90%;
    padding: 10px 20px;
  }
  .sala,
  .cocina,
  .recamara {
    height: 100vh;
  }
}

.filtro-boton {
  padding: 0.3rem 3rem;
  font-size: larger;
  border-radius: 0.5rem;
  background-color: $fondo;
  color: $secundario;
  border: none;
  box-shadow: 0px 15px 20px rgba($color: $gris, $alpha: 0.25);
  font-weight: 500;
  transition: all 0.5s ease;
}

.filtro-boton:hover {
  background-color: $secundario !important;
  color: $fondo !important;
  outline: 0 !important;
  transition: all 0.5s ease;
  transform: translateY(-2px);
}

.filtro-boton:focus,
.filtro-boton:active,
.filtro-boton:visited,
.filtro-boton:focus-visible,
.btn-secondary:not(:disabled):not(.disabled).active {
  background-color: $fondo;
  color: $secundario;
  border: none;
  outline: 0 !important;
  transition: all 0.5s ease;
  transform: translateY(-2px);
  box-shadow: 0px 15px 20px rgba($color: $gris, $alpha: 0.25);
}





::v-deep .custom-select {
  font-size: larger;
  border-radius: 0.5rem;
  background-color: $fondo !important;
  color: $secundario !important;
  border: none;
  box-shadow: 0px 15px 20px rgba($color: $gris, $alpha: 0.25);
  width: 75%;
  margin: 0 auto;
  transition: all 0.5s ease;
  text-align: center;
  font-weight: 500;
}

::v-deep a {
  color: $secundario !important;
  text-decoration: none;
  text-shadow: 0 1px 2px rgba($color: black, $alpha: 0.1);
}

.filtro-buscar {
  padding: 0.3rem 3rem;
  font-size: larger;
  border-radius: 0.5rem;
  background-color: $secundario;
  color: $fondo;
  border: none;
  box-shadow: 0px 15px 20px rgba($color: $gris, $alpha: 0.25);
  font-weight: 500;
  transition: all 0.5s ease;
}

.filtro-buscar:hover {
  background-color: $fondo !important;
  color: $secundario !important;
  outline: 0 !important;
  transition: all 0.5s ease;
  transform: translateY(-2px);
}

.filtro-buscar:focus,
.filtro-buscar:active,
.filtro-buscar:visited,
.filtro-buscar:focus-visible {
  background-color: rgba($color: $secundario, $alpha: 0.6) !important;
  color: $fondo !important;
  outline: 0 !important;
  transition: all 0.5s ease;
  transform: translateY(-2px);
}

.filtro-buscar-des {
  padding: 0.3rem 3rem;
  font-size: larger;
  border-radius: 0.5rem;
  background-color: $secundario;
  color: $fondo;
  border: none;
  box-shadow: 0px 15px 20px rgba($color: $gris, $alpha: 0.25);
  font-weight: 500;
  transition: all 0.5s ease;
}



.filtro-reset {
  padding: 0.3rem 3rem;
  font-size: larger;
  border-radius: 0.5rem;
  background-color: $fondo;
  color: $secundario;
  border: none;
  box-shadow: 0px 15px 20px rgba($color: $gris, $alpha: 0.25);
  font-weight: 500;
  transition: all 0.5s ease;
}

.filtro-reset:hover {
  background-color: $secundario !important;
  color: $fondo !important;
  outline: 0 !important;
  transition: all 0.5s ease;
  transform: translateY(-2px);
}

.filtro-reset:focus,
.filtro-reset:active,
.filtro-reset:visited,
.filtro-reset:focus-visible {
  background-color: rgba($color: $secundario, $alpha: 0.6) !important;
  color: $fondo !important;
  outline: 0 !important;
  transition: all 0.5s ease;
  transform: translateY(-2px);
}

.rango {
  font-size: x-small;
  border-radius: 0.5rem;
  background-color: $secundario !important;
  color: $fondo!important;
  border: none;
  width: 75%;
  transition: all 0.5s ease;
  text-align: center;
  font-weight: 500;
  padding: 1rem 0;
}

.valores {
  font-size: x-small;
  border-radius: 0.5rem;
  background-color: $secundario !important;
  color: $fondo !important;
  border: none;
  width: 100%;
  transition: all 0.5s ease;
  text-align: center;
  font-weight: 500;
  padding: 1rem 0;
}

.rangos {
  font-size: x-small;
  color: $secundario !important;
  font-weight: 700;
}

::v-deep .modal-header {
  border: none;
}
::v-deep .modal-title {
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  width: 100%;
  padding: 1rem 0;
  color: $secundario !important;
}
</style>
