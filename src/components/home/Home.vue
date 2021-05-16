<template>
  <div class="my-0 mx-0">
    <Video />
    <b-container fluid>
      <Nav />
      <GaleriaHome />

      <b-row class="justify-content-between">
        <Glosario />
        <Servicios />
      </b-row>
      <b-row>
        <b-col class="mx-0 px-0">
          <Contacto />
        </b-col>
      </b-row>
      <Footer />
    </b-container>
  </div>
</template>

<script>
import Nav from "../../Navbar";
import Video from "@/components/home/Video";
import GaleriaHome from "@/components/home/GaleriaHome";
import Glosario from "@/components/home/Glosario";
import Servicios from "@/components/home/Servicios";
import Contacto from "@/components/home/Contacto";
import Footer from "@/Footer";

export default {
  name: "Home",
  components: {
    Nav,
    Video,
    GaleriaHome,
    Glosario,
    Servicios,
    Contacto,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>