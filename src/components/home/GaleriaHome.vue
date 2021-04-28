<template>
  <div class="my-4">
    <b-row class="text-center">
      <b-col cols="12">
        <h2 class="font-weight-bold py-5">GALERIA</h2>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col cols="12">
        <carousel :perPageCustom="[[0, 1], [768, 2], [1024,3]]">
          <slide class="p-2">
            <b-card
              img-src="https://lh3.googleusercontent.com/BJ_iC68Q3tTlMggzLiYdjovaGwbcowZqQspU-hJMg0eh0odzNEcXXrSkx-dxCqB-pSv2HZPUlcxmeJPC3OV0qN36=s825-c"
              img-alt="Galeria Peony"
              img-top
              class="galeria"
            >
              <b-card-text>
                <p class="h4">Gato</p>
              </b-card-text>
            </b-card>
          </slide>

          <slide class="p-2">
            <b-card
              img-src="https://decoracionyjardines.com/wp-content/uploads/2016/05/Calendario-de-flores-de-temporada-4.jpg"
              img-alt="Galeria Peony"
              img-top
              class="galeria"
            >
              <b-card-text>
                <p class="h4">Gato</p>
              </b-card-text>
            </b-card>
          </slide>

          <slide class="p-2">
            <b-card
              img-src="https://floryfaunamonforte.com/wp-content/uploads/2016/04/Unknown-1.jpeg"
              img-alt="Galeria Peony"
              img-top
            >
              <b-card-text>
                <p class="h4">Gato</p>
              </b-card-text>
            </b-card>
          </slide>

          <slide class="p-2">
            <b-card
              img-src="https://decoracionyjardines.com/wp-content/uploads/2016/05/Calendario-de-flores-de-temporada-1.jpg"
              img-alt="Galeria Peony"
              img-top
            >
              <b-card-text>
                <p class="h4">Gato</p>
              </b-card-text>
            </b-card>
          </slide>

          <slide class="p-2">
            <b-card
              img-src="https://decoracionyjardines.com/wp-content/uploads/2016/05/Calendario-de-flores-de-temporada-2-300x188.jpg"
              img-alt="Galeria Peony"
              img-top
            >
              <b-card-text>
                <p class="h4">Gato</p>
              </b-card-text>
            </b-card>
          </slide>
        </carousel>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "GaleriaHome",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = slide;
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = slide;
      this.sliding = false;
    },
  },
};
</script>


<style scoped>
.row {
  margin-top: 2rem;
}

.galeria, img{
  min-height: 30rem;
  height: 30rem;
}
</style>