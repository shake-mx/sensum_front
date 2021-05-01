<template>
  <b-col cols="12" md="6">
    <h2 class="font-weight-bold py-3 text-center titulo-valores">
        Servicios
        </h2>
    <b-col cols="10" class="tarjeta my-4 mx-auto">
      <b-row>
        <b-col cols="12">
          <h4 class="font-weight-bold my-5 text-center subtitulo-valores descripcion">
            "...una flor para cada momento de tu vida...""
          </h4>
        </b-col>
        <b-col cols="9" class="mx-auto">
          <div>
            <img
              id="imagenServicios"
              class="img-fluid rounded"
              src="@/assets/peony_1.jpeg"
              alt="Servicios"
            />
          </div>
        </b-col>

        <b-col cols="12">
          <h5 class="my-4  text-center descripcion">
            Las fechas importantes de la vida siempre han sido acompañadas por
            flores. ¡Por eso las amamos!
          </h5>
        </b-col>
      </b-row>
    </b-col>
  </b-col>
</template>


<script>
export default {
  name: "Servicios",
};
</script>


<style lang="scss" scoped>

.descripcion{
  height: 3rem;
}

</style>