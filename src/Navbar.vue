<template>
  <b-navbar toggleable type="dark" class="bg-filter fixed-top ">
    <b-container >
    <b-navbar-brand href="https://sensum.mx/">
      <img
        src="@/assets/logo.png"
        class="d-inline-block align-top navLogo"
        alt="Logo Sensum Soluciones Inmobiliarias"
      />
    </b-navbar-brand>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
    <b-collapse id="nav-collapse" class="text-uppercase" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" class="linea"><h3>Inicio</h3> </b-nav-item>
        <b-nav-item href="#" class="linea"><h3>Quiénes Somos</h3> </b-nav-item>
        <b-nav-item href="#" class="linea"><h3>Soluciones</h3> </b-nav-item>
        <b-nav-item href="#" class="linea"><h3>Catálogo</h3> </b-nav-item>
        <b-nav-item href="#" class="linea"><h3>Testimonios</h3> </b-nav-item>
        <b-nav-item href="#" class="linea"><h3>Contactos</h3> </b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    </b-container>
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




</style>
