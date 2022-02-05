<template>
  <div class="p-0 m-0">
   
      <Nav />
      <Flotantes/>
      <HeroCatalogo/>
      <br>
      <br>
      <Relevantes/>
      <br>
      <br>
      
      <Accion2/>
      <Testimoniales/>
      <Footer/>
 
  </div>
</template>

<script>
import Nav from "@/components/Navbar";
import Flotantes from "@/components/Flotantes";
import HeroCatalogo from "@/components/catalogo/HeroCatalogo";
import Relevantes from "@/components/catalogo/Relevantes";
import Accion2 from "@/components/Accion2";
import Testimoniales from "@/components/home/Testimoniales";
import Footer from "@/components/Footer";

export default {
  name: "Catalogo",
  components: {
    Nav,
    Flotantes,
    HeroCatalogo,
    Relevantes,
    Accion2,
    Testimoniales,
    Footer
  },
};
</script>

<style lang="scss" scoped>


</style>
