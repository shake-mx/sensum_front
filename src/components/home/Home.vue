<template>
  <div class="p-0 m-0">
   
      <Nav />
      <Hero />
      <br>
      <br>
      <br>

      <Somos/>
      <br>
      <Accion1/>
      <TitularServicios/>
      <Soluciones/>
      <Servicios/>
 
  </div>
</template>

<script>
import Nav from "../../Navbar";
import Hero from "@/components/home/Hero";
import Somos from "@/components/home/Somos";
import Accion1 from "@/components/home/Accion1";
import TitularServicios from "@/components/home/TitularServicios";
import Soluciones from "@/components/home/Soluciones";
import Servicios from "@/components/home/Servicios";

export default {
  name: "Home",
  components: {
    Nav,
    Hero,
    Somos,
    Accion1,
    TitularServicios,
    Soluciones,
    Servicios
  },
};
</script>

<style lang="scss" scoped>


</style>
