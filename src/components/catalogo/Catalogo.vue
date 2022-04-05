<template>
  <div class="p-0 m-0" id="inicio">
    <Nav />
    <Flotantes />
    <HeroCatalogo @filtroPropiedad="actualizarPropiedad" />
    <br />
    <br />
    <template v-if="relevantes.length > 0">
      <Relevantes :relevantes="relevantes"/>
    </template>
    <template v-else>
      <Loading />
    </template>
    <br />
    <br />
    <Accion2 />
    <br />
    <br />
    <template v-if="this.loading">
      <Loading />
    </template>
    <template v-else>
      <template v-if="propiedades.length > 0">
        <Propiedades :propiedades="propiedades" id="propiedades" />
      </template>
      <template v-else>
        <NoPropiedad  id="propiedades"  />
      </template>
    </template>
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
import NoPropiedad from "@/components/catalogo/NoPropiedad";
import Testimoniales from "@/components/home/Testimoniales";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

export default {
  name: "Catalogo",
  data() {
    return {
      propiedades: [],
      relevantes: [],
      buscarAnuncio: "",
      buscarRenta: "",
      buscarVenta: "",
      propiedadCatalogo: "",
      min: "",
      max: "",
      setVariable: "",
      tipoAnuncio: [],
      options: [],
      sinFiltro: false,
      loading: false,
    };
  },
  components: {
    Nav,
    Flotantes,
    HeroCatalogo,
    Relevantes,
    Accion2,
    Propiedades,
    NoPropiedad,
    Testimoniales,
    Footer,
    Loading,
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

      if (this.sinFiltro) {
        sensumService
          .getPropiedades()
          .then(
            (propiedades) => (this.propiedades = propiedades.data.slice(0, 99))
          )
          .catch((error) => console.log(error));
      } else {
        sensumService
          .getPropiedades()
          .then(
            (propiedades) =>
              (this.propiedades = propiedades.data.filter(
                (propiedadAnuncio) => {
                  return (
                    propiedadAnuncio.tipo_anuncio.includes(
                      this.buscarAnuncio
                    ) &&
                    propiedadAnuncio.tipo_propiedad.includes(
                      this.propiedadCatalogo
                    ) &&
                    propiedadAnuncio.precio >= this.min &&
                    propiedadAnuncio.precio <= this.max
                  );
                }
              ))
          )
          .catch((error) => console.log(error));
      }
    },
  },
  mounted() {
    this.loading = true;
    sensumService
      .getPropiedades()
      .then((propiedades) => (this.propiedades = propiedades.data, this.loading = false, this.relevantes = propiedades.data))
      .catch((error) => console.log(error));
  },
  watch: {
    anuncio: {
      deep: true,
      handler: "actualizarPropiedad",
    },
  },
};
</script>

<style lang="scss" scoped></style>
