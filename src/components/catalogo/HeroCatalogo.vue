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
    <b-container class="postit legible">
      <b-row >
        <b-col cols="8" offset="2" class="subrayado py-1">
          <h4 class="color-azul">Soluciones Inmobiliarias con Sentido Humano</h4>
        </b-col>
        <b-col cols="2" >
          <font-awesome-icon icon="map-marked-alt"  size="2x" class="color-verde legible"/> 
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
            class="my-2 filtro-lista"
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
          <label for="range-2"><h4 class="rango">Rango de Precio ${{ value }}</h4></label>
          <br>
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
          <b-col cols="4" class="text-center"><h6 class="rango d-inline">$0.00 </h6></b-col>
          <b-col offset="4" cols="4" class="text-center"><h6 class="rango d-inline">$20,000,000</h6></b-col>
        </b-row>   
        </b-col>

        <b-col cols="12" >
          <b-button class="filtro-buscar w-75"
            ><strong>Buscar</strong></b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HeroCatalogo",
  data() {
      return {
        value: '10'
      }
    }
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
  color: $primario;
  background-color: rgba($color: $fondo, $alpha: 0.75);
  border-radius: 15px;
  padding: 5px 20px;
  height: auto;
  width: 45rem;
}

.subrayado {
  background-image: linear-gradient(to right, $azul, $azul);
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
  color: $azul;
  border: none;
  box-shadow: 0 2px 4px rgba($color: black, $alpha: 0.4);
  font-weight: 500;
}

.filtro-boton:hover,
.filtro-boton:focus,
.filtro-boton:active,
.filtro-boton:visited,
.filtro-boton:focus-visible {
  background-color: $azul !important;
  color: $fondo !important;
  outline: 0 !important;
}

::v-deep .btn-primary {
  font-size: larger;
  border-radius: 0.5rem;
  background-color: $fondo !important;
  color: $azul !important;
  border: none;
  box-shadow: 0 2px 4px rgba($color: black, $alpha: 0.4);
  font-weight: 500;
  width: 75%;
  margin: 0 auto;
}

::v-deep a {
  color: $azul !important;
  text-decoration: none;
  text-shadow: 0 1px 2px rgba($color: black, $alpha: 0.1);
}

.filtro-buscar {
  padding: 0.3rem 3rem;
  font-size: larger;
  border-radius: 0.5rem;
  background-color: $verde;
  color: $fondo;
  border: none;
  box-shadow: 0 2px 4px rgba($color: black, $alpha: 0.4);
  font-weight: 500;
}

.filtro-buscar:hover,
.filtro-buscar:focus,
.filtro-buscar:active,
.filtro-buscar:visited,
.filtro-buscar:focus-visible {
  background-color: $fondo !important;
  color: $verde !important;
  outline: 0 !important;
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
  background: $azul;
}

.rango {
  font-size: larger;
  color: $azul!important;
  font-weight: 500;
}

</style>
