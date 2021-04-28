<template>
  <b-col cols="12" md="6">
    <h2 class="font-weight-bold py-3 text-center titulo-valores">
      EL JARDÍN SECRETO
    </h2>
    <b-col cols="10" class="tarjeta my-4 mx-auto">
      <b-row>
        <b-col cols="12">
          <h4 class="font-weight-bold my-5 text-center subtitulo-valores">
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
          <h5 class="my-4  text-md-center text-justify ">
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

.tarjeta {
  border-color: $primario;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 4px 4px 4px 4px rgba(87, 54, 85, 0.2);
  height: 45rem;
}

</style>