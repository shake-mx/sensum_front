<template>
  <div class="p-0 m-0" id="inicio">
   
      <Nav />
      <Flotantes/>
      <Hero />
      <br>
      <br>

      <Somos/>
      <br>
      <Accion1/>
      <TitularServicios/>
      <Soluciones/>
      <Legales/>
      <Especializadas/>
      <Accion2/>
      <Testimoniales/>
      <Footer/>
 
  </div>
</template>

<script>
import Nav from "@/components/Navbar";
import Flotantes from "@/components/Flotantes";
import Hero from "@/components/home/Hero";
import Somos from "@/components/home/Somos";
import Accion1 from "@/components/Accion1";
import TitularServicios from "@/components/home/TitularServicios";
import Soluciones from "@/components/home/Soluciones";
import Legales from "@/components/home/Legales";
import Especializadas from "@/components/home/Especializadas";
import Accion2 from "@/components/Accion2";
import Testimoniales from "@/components/home/Testimoniales";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    Nav,
    Flotantes,
    Hero,
    Somos,
    Accion1,
    TitularServicios,
    Soluciones,
    Legales,
    Especializadas,
    Accion2,
    Testimoniales,
    Footer
  },

};
</script>

<style lang="scss" scoped>


</style>
