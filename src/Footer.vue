<template>
  <b-container fluid class="bg-secundario">
    <b-container class="my-4">
      <b-row class="justify-content-between pt-4">
        <b-col cols="12" md="4" class="text-left my-4">
          <h1>Contacto</h1>
          <br />
          <h3>Correo Electrónico</h3>
          <h5><font-awesome-icon icon="envelope" /> informes@sensum.mx</h5>
          <br />
          <h3>Teléfono</h3>
          <h5><font-awesome-icon icon="phone-alt" /> 56-3029-6930</h5>
          <br />
          <h3>Dirección</h3>
          <h5>
            <font-awesome-icon icon="map-marker-alt" /> San Marcos Business |
            Therapy Place, Oficina B-62. Cuautitlán Izcalli, Edo México, C. P.
            54720
          </h5>
        </b-col>
        <b-col cols="12" md="4" class="my-4">
          <b-embed
            type="iframe"
            class="curva"
            aspect="1by1"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15027.735302596288!2d-99.2070966!3d19.6728284!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x164bf27d3dffa4ef!2sBUSINESS%20%26%20THERAPY%20PLACE%20%7C%20SAN%20MARCOS!5e0!3m2!1ses-419!2smx!4v1638650043692!5m2!1ses-419!2smx"
          ></b-embed>
        </b-col>
        <b-col cols="12" md="4" class="text-left text-md-right my-4">
          <h1>Mapa de Sitio</h1>
          <br>
          <h5>Inicio</h5>
          <h5>Quiénes Somos</h5>
          <h5>Soluciones</h5>
          <h5>Catálogo</h5>
          <h5>Testimonios</h5>
          <h5>Contactos</h5>
          <br>
          <h1>Redes Sociales</h1>
        
        <b-row>
          <b-col>
            <h5>
            <font-awesome-icon size="1x" :icon="['fab', 'facebook-square']"/> Facebook
          </h5>
          <h5>
            <font-awesome-icon size="1x" :icon="['fab', 'youtube-square']" /> Youtube
          </h5>
          </b-col>
        </b-row>
        </b-col>
      </b-row>
        <b-row class="text-center">
        <b-col cols="12">
          <h5>
            <span>
              © Copyright <strong>Sensum Soluciones Inmobiliarias</strong></span
            >
          </h5>
        </b-col>
        <b-col cols="12">
          <h5>
            Desarrollado por
            <a class="shake" href="https://shake.mx/" target="blank">
              Shake
            </a>
          </h5>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
a {
  color: $texto;
  text-decoration: none;
}
</style>
