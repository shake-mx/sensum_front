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
        <carousel
          :paginationEnabled="false"
          :perPageCustom="[[0, 1], [576, 2], [1024,3]]"
          :mouseDrag="false"
          :touchDrag="false"
          autoplay
          loop
          :autoplayHoverPause="false"
          :autoplayTimeout="5000"
          easing="ease-in"
          id="inicioCatalogo"
        >
          <slide refs="slide" >
            <b-card
              img-src="https://placekitten.com/700/450"
              img-alt="Image"
              img-top
              title="Hola Mundo"
              sub-title="Subtitulo"
              class="destacado curva"
            >          
              <b-card-body class="bg-secundario">
                <b-card-text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </b-card-text>
              </b-card-body>

              <b-list-group flush>
                <b-list-group-item>Cras justo odio</b-list-group-item>
                <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                <b-list-group-item>Vestibulum at eros</b-list-group-item>
              </b-list-group>

              <b-card-footer>This is a footer</b-card-footer>
            </b-card>
          </slide>
        </carousel>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Relevantes",
};
</script>

<style lang="scss" scoped>
::v-deep .destacado{
  color: $rojo!important;
  background-color: rosybrown;
}

.card-img-top{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px 15px 0px 0px;

}

</style>
