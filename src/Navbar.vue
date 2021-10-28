<template>
  <b-navbar type="dark" toggleable="xs" class="fondo fixed-top" >
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#"><h3>Inicio</h3> </b-nav-item>
        <b-nav-item href="#"><h3>Quiénes Somos</h3> </b-nav-item>
        <b-nav-item href="#"><h3>Servicios</h3> </b-nav-item>
        <b-nav-item href="#"><h3>Testimonios</h3> </b-nav-item>
        <b-nav-item href="#"><h3>Catálogo</h3> </b-nav-item>
        <b-nav-item href="#"><h3>Contactos</h3> </b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-brand href="https://peony.mx/" >
      <img
        src="@/assets/logo.png"
        class="d-inline-block align-top navLogo"
        alt="Logo Sensum Soluciones Inmobiliarias"
      />
    </b-navbar-brand>
  </b-navbar>
</template>

<script> 
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
.navLogo {
  max-width: 50px;
}

.fondo{
    background-color: rgba(51,51,51,.9);
    min-height: 75px;
    backdrop-filter: blur(15px); 
}

h3{
  color:$texto;
}



</style>