<template>
  <div class="p-0 m-0">
    <Nav />
    <Flotantes />
    <HeroCatalogo @filtroPropiedad="actualizarPropiedad" />
    <br />
    <br />
    <Relevantes />
    <br />
    <br />
    <Accion2 />
    <br />
    <br />
    <Propiedades :propiedades="propiedades" id="propiedades"/>

    <Testimoniales />
    <Footer />
  </div>
</template>

<script>
import sensumService from "@/services/sensumService.js";
import Nav from "@/components/Navbar";
import Flotantes from "@/components/Flotantes";
import HeroCatalogo from "@/components/catalogo/HeroCatalogo";
import Relevantes from "@/components/catalogo/Relevantes";
import Accion2 from "@/components/Accion2";
import Propiedades from "@/components/catalogo/Propiedades";
import Testimoniales from "@/components/home/Testimoniales";
import Footer from "@/components/Footer";

export default {
  name: "Catalogo",
  data() {
    return {
      propiedades: [],
      buscarAnuncio:"",
      buscarRenta:"",
      buscarVenta:"",
      propiedadCatalogo:"",
      min:"",
      max:"",
      setVariable: "",
      tipoAnuncio:[],
      options:[],
      sinFiltro:false,
    };
  },
  components: {
    Nav,
    Flotantes,
    HeroCatalogo,
    Relevantes,
    Accion2,
    Propiedades,
    Testimoniales,
    Footer,
  },
  methods: {
    actualizarPropiedad(options) {
      this.buscarAnuncio = options.buscarAnuncio;
      this.buscarRenta = options.buscarRenta;
      this.buscarVenta = options.buscarVenta;
      this.propiedadCatalogo = options.propiedadCatalogo;
      this.min = options.min;
      this.max = options.max;
      this.sinFiltro = options.sinFiltro;
      this.setVariable = options.setVariable;
       
       document.getElementById("propiedades").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      if(this.sinFiltro){
       sensumService
      .getPropiedades()
      .then((propiedades) => (this.propiedades = propiedades.data.slice(0, 99)))
      .catch((error) => console.log(error));
      }else{
      sensumService
      .getPropiedades()
      .then((propiedades) => (this.propiedades = propiedades.data.filter((propiedadAnuncio)=> {
        return propiedadAnuncio.tipo_anuncio.includes(this.buscarAnuncio) && propiedadAnuncio.tipo_propiedad.includes(this.propiedadCatalogo) && (propiedadAnuncio.precio >= this.min) && (propiedadAnuncio.precio <= this.max) ;
      })))
      .catch((error) => console.log(error));
    }
    },
  },
  mounted() {
    sensumService
      .getPropiedades()
      .then((propiedades) => (this.propiedades = propiedades.data))
      .catch((error) => console.log(error));
  },
  watch:{
    anuncio:{
      deep: true,
      handler: "actualizarPropiedad"  
    }
  }
};
</script>

<style lang="scss" scoped></style>
