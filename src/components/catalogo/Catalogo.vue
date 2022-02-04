<template>
  <div class="p-0 m-0">
   
      <Nav />
      <Flotantes/>
      
      <Accion2/>
      <Testimoniales/>
      <Footer/>
 
  </div>
</template>

<script>
import Nav from "@/components/Navbar";
import Flotantes from "@/components/Flotantes";
import Accion2 from "@/components/Accion2";
import Testimoniales from "@/components/home/Testimoniales";
import Footer from "@/components/Footer";

export default {
  name: "Catalogo",
  components: {
    Nav,
    Flotantes,
    Accion2,
    Testimoniales,
    Footer
  },
};
</script>

<style lang="scss" scoped>


</style>
