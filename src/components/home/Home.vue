<template>
  <div class="p-0 m-0">
   
      <Nav />
      <Hero />
      <br>

      <Somos/>
      <br>
      <Servicios/>
 
  </div>
</template>

<script>
import Nav from "../../Navbar";
import Hero from "@/components/home/Hero";
import Somos from "@/components/home/Somos";
import Servicios from "@/components/home/Servicios";

export default {
  name: "Home",
  components: {
    Nav,
    Hero,
    Somos,
    Servicios
  },
};
</script>

<style lang="scss" scoped>


</style>
