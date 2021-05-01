<template>
  <b-col cols="12" md="6">
    <h1 class="py-5">
      El Jardín Secreto
    </h1>
    <b-col cols="10" class="tarjeta my-4 mx-auto">
      <b-row>
        <b-col cols="12">
          <h4 class="font-weight-bold my-5 text-center subtitulo-valores descripcion">
            "...el mundo esta hecho de flores..."
          </h4>
        </b-col>
        <b-col cols="9" class="mx-auto">
          <div>
            <img
              id="imagenGlosario"
              class="img-fluid rounded"
              src="@/assets/peony_2.jpeg"
              alt="El Jardín Secreto"
            />
          </div>
        </b-col>
        <b-col cols="12" >
          <h5 class="my-4  text-center  descripcion">
            Descubre semana a semana más de las flores y plantas
          </h5>
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
  height: 3rem;
}

</style>