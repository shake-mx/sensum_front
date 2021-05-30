<template>
  <div class="my-4">
    <b-row class="text-center">
      <b-col cols="12">
        <h1 class="py-5">Galería</h1>

      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col cols="12">
        <carousel :perPageCustom="[[0, 1], [768, 2], [1024,3]]">
          <slide class="p-2">
            <b-card img-top>
            <template>
              <img src="@/assets/galeria/Galeria_01.jpeg" alt="Galeria Peony"  class="img-fluid rounded">
            </template>
              <b-card-text>
                <p class="h4"></p>
              </b-card-text>
            </b-card>
          </slide>
          <slide class="p-2">
            <b-card img-top>
            <template>
              <img src="@/assets/galeria/Galeria_02.jpeg" alt="Galeria Peony"  class="img-fluid rounded">
            </template>
              <b-card-text>
                <p class="h4"></p>
              </b-card-text>
            </b-card>
          </slide>
           <slide class="p-2">
            <b-card img-top>
            <template>
              <img src="@/assets/galeria/Galeria_03.jpeg" alt="Galeria Peony"  class="img-fluid rounded">
            </template>
              <b-card-text>
                <p class="h4"></p>
              </b-card-text>
            </b-card>
          </slide>
           <slide class="p-2">
            <b-card img-top>
            <template>
              <img src="@/assets/galeria/Galeria_04.jpeg" alt="Galeria Peony" class="img-fluid rounded">
            </template>
              <b-card-text>
                <p class="h4"></p>
              </b-card-text>
            </b-card>
          </slide>
           <slide class="p-2">
            <b-card img-top>
            <template>
              <img src="@/assets/galeria/Galeria_05.jpeg" alt="Galeria Peony"  class="img-fluid rounded">
            </template>
              <b-card-text>
                <p class="h4"></p>
              </b-card-text>
            </b-card>
          </slide>
           <slide class="p-2">
            <b-card img-top>
            <template>
              <img src="@/assets/galeria/Galeria_06.jpeg" alt="Galeria Peony"  class="img-fluid rounded">
            </template>
              <b-card-text>
                <p class="h4"></p>
              </b-card-text>
            </b-card>
          </slide>
           <slide class="p-2">
            <b-card img-top>
            <template>
              <img src="@/assets/galeria/Galeria_07.jpeg" alt="Galeria Peony"  class="img-fluid rounded">
            </template>
              <b-card-text>
                <p class="h4"></p>
              </b-card-text>
            </b-card>
          </slide>
           <slide class="p-2">
            <b-card img-top>
            <template>
              <img src="@/assets/galeria/Galeria_08.jpeg" alt="Galeria Peony"  class="img-fluid rounded">
            </template>
              <b-card-text>
                <p class="h4"></p>
              </b-card-text>
            </b-card>
          </slide>
           <slide class="p-2">
            <b-card img-top>
            <template>
              <img src="@/assets/galeria/Galeria_09.jpeg" alt="Galeria Peony"  class="img-fluid rounded">
            </template>
              <b-card-text>
                <p class="h4"></p>
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


<style lang="scss" scoped>
.row {
  margin-top: 2rem;
}


</style>