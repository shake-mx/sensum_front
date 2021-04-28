<template>
  <b-navbar type="dark" toggleable="xs" class="fondo fixed-top px-5">
    <b-navbar-brand href="#">
      <img
        src="@/assets/logo.png"
        class="d-inline-block align-top navLogo"
        alt="Logo Peony"
      />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"><h3>Inicio</h3></b-nav-item>
        <b-nav-item href="#"><h3>Galería</h3> </b-nav-item>
        <b-nav-item href="#"><h3>Glosario</h3> </b-nav-item>
        <b-nav-item href="#"><h3>Servicios</h3> </b-nav-item>
        <b-nav-item href="#"><h3>Contacto</h3> </b-nav-item>
        <b-nav-item href="#"><h3>Redes Sociales</h3></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
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

</style>