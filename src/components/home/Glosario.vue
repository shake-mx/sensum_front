<template>
  <b-col cols="12" md="6">
    <h1 class="py-5">
      El Jardín Secreto
    </h1>
    <b-col cols="12" class="tarjeta my-md-4 mx-auto">
      <b-row>
        <b-col cols="12" class="mx-auto">
          <div>
            <img
              id="imagenGlosario"
              class="img-fluid rounded"
              src="@/assets/peony_2.jpeg"
              alt="El Jardín Secreto"
            />
          </div>
        </b-col>
        <b-col cols="12">
          <h5 class="my-3 text-center subtitulo-valores descripcion">
            "...el mundo esta hecho de flores..."
          </h5>
        </b-col>
        <b-col cols="12" >
          <h4 class="  text-center subtitulo-valores descripcion">
            Semana a semana un descubrimiento floral
          </h4>
        </b-col>
      </b-row>
    </b-col>
  </b-col>
</template>


<script>
export default {
  name: "Glosario",
};
</script>


<style lang="scss" scoped>

.descripcion{
  height: 2rem;
}

@media only screen and (max-width: 576px) {
  .descripcion{
    height: 3rem;
  }

} 

img{
  height: 40rem !important;
  width: 100% !important;
}

@media only screen and (max-width: 576px) {
  img{
  height: 25rem !important;

}

} 

</style>
