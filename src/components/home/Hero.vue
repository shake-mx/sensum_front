<template>
  <div>
    <b-container fluid class="bghero-parallax vertical-center" id="inicio">
      <b-row>
        <b-col cols="8" class="bg-hero pl-0 curva-hero">
          <b-row class="justify-content-md-end justify-content-center">
            <b-col cols="6">
              <img
                src="@/assets/logo_ssi.png"
                class="img-fluid p-0 m-0"
                alt="Sensum Soluciones Inmobiliarias"
              />
            </b-col>
          </b-row>
          <hr class="bg-secundario pt-1" />
        </b-col>
      </b-row>
    </b-container>
    <b-container >
      <b-row>
        <b-col >
          <b-modal
            ref="my-modal"
            hide-footer
            scrollable
            hide-title
          >
            <b-container>
              <b-row>
                <b-col v-for="portada in portadas" :key="portada.id">
                  <b-img :src="portada.modal_imagen" :alt="portada.modal_subtitulo" fluid class="curva"></b-img>
                  <h3 class="color-secundario text-center py-5">{{portada.modal_titulo}}</h3>
                </b-col>
              </b-row>
            </b-container>
           
            
          </b-modal>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import sensumService from "@/services/sensumService.js";
export default {
  name: "Hero",
  data() {
    return {
      portadas: [],
    };
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  },
  mounted() {
    this.showModal();
    sensumService.getPortadas().then((response) => {
      this.portadas = response.data;
    });
  },
 
};
</script>

<style lang="scss" scoped>
.bghero-parallax {
  height: 100vh;
  background: url("~@/assets/heromd.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

@media only screen and (max-width: 992px) {
  .bghero-parallax {
    height: 100vh;
    background: url("~@/assets/herosm.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: initial;
  }
}
</style>
