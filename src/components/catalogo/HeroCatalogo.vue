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
    <b-container class="postit legible" data-aos="fade-up" data-aos-duration="3000">
      <b-row>
        <b-col cols="8" offset="2" class="subrayado py-1">
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
      <b-row class="justify-content-between">
        <b-col cols="6" class="my-3 ">
          <b-button class="filtro-boton">Venta</b-button>
        </b-col>
        <b-col cols="6" class="my-3 ">
          <b-button class="filtro-boton">Renta</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="mx-auto">
          <b-dropdown
            text="Tipo de Propiedad"
            block
            variant="primary"
            class="my-2"
            menu-class="w-75"
          >
            <b-dropdown-item href="#">Casa</b-dropdown-item>
            <b-dropdown-item href="#">Departamento</b-dropdown-item>
            <b-dropdown-item href="#">Oficina</b-dropdown-item>
            <b-dropdown-item href="#">Terreno</b-dropdown-item>
            <b-dropdown-item href="#">Renta</b-dropdown-item>
          </b-dropdown>
        </b-col>
        <b-col cols="12" class="my-3">
          <label for="range-2"
            ><h4 class="rango">Rango de Precio ${{ value }}</h4></label
          >
          <br />
          <b-form-input
            class="w-75 filtro-select"
            id="range-2"
            v-model="value"
            type="range"
            min="0"
            max="20"
            step="0.5"
          ></b-form-input>
          <b-row>
            <b-col cols="4" class="text-center"
              ><h6 class="rango d-inline">$0.00</h6></b-col
            >
            <b-col offset="4" cols="4" class="text-center"
              ><h6 class="rango d-inline">$20,000,000</h6></b-col
            >
          </b-row>
        </b-col>

        <b-col cols="12">
          <b-button class="filtro-buscar w-75"
            ><strong>Buscar</strong></b-button
          >
        </b-col>
      </b-row>
    </b-container>
    <!-- <b-modal
      title="Ubica tu propiedad"
      scrollable
      hide-footer
      id="modal-mapa"
      size="xl"
    >
      <b-container>
        <b-row>
          <b-col>
     
          </b-col>
        </b-row>
      </b-container>
    </b-modal> -->
  </div>
</template>

<script>
export default {
  name: "HeroCatalogo",
  data() {
    return {
      value: "10",
    };
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
  bottom: 40%;
  text-align: center;
  background-color: rgba($color: $fondo, $alpha: 0.75);
  border-radius: 15px;
  padding: 5px 20px;
  height: auto;
  width: 45rem;
  box-shadow: 0px 15px 20px rgba($color: $gris, $alpha: 0.25);
}

.subrayado {
  background-image: linear-gradient(to right, $secundario, $secundario);
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 70% 0.2rem;
  transition: background-size 1s ease;
}

@media only screen and (max-width: 576px) {
  .postit {
    bottom: 10%;
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

.filtro-boton:hover,
.filtro-boton:focus,
.filtro-boton:active,
.filtro-boton:visited,
.filtro-boton:focus-visible {
  background-color: $secundario !important;
  color: $fondo !important;
  outline: 0 !important;
  transition: all 0.5s ease;
  transform: translateY(-2px);
}

::v-deep .btn-primary {
  font-size: larger;
  border-radius: 0.5rem;
  background-color: $fondo !important;
  color: $secundario !important;
  border: none;
  box-shadow: 0px 15px 20px rgba($color: $gris, $alpha: 0.25);
  width: 75%;
  margin: 0 auto;
  transition: all 0.5s ease;
}

::v-deep .btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary:visited,
.btn-primary:focus-visible {
  transition: all 0.5s ease;
  transform: translateY(-2px);
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

.filtro-buscar:hover,
.filtro-buscar:focus,
.filtro-buscar:active,
.filtro-buscar:visited,
.filtro-buscar:focus-visible {
  background-color: $fondo !important;
  color: $secundario !important;
  outline: 0 !important;
  transition: all 0.5s ease;
  transform: translateY(-2px);
}

input[type="range"] {
  overflow: hidden;
  width: 80px;
  -webkit-appearance: none;
  background-color: $fondo;
  border-radius: 0.5rem;
  padding: 1rem 0.3rem;
}

input[type="range"]::-webkit-slider-runnable-track {
  height: 4px;
  -webkit-appearance: none;
  background-color: rgba($color: $gris, $alpha: 0.2);
  margin-top: -1px;
}

input[type="range"]::-webkit-slider-thumb {
  width: 10px;
  -webkit-appearance: none;
  height: 10px;
  cursor: ew-resize;
  background: $secundario;
}

.rango {
  font-size: larger;
  color: $secundario !important;
  font-weight: 500;
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
