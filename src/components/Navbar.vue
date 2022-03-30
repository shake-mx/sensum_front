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
    
    <b-collapse id="nav-collapse" class="text-uppercase " is-nav>
      <b-navbar-nav class="text-center">
        <b-nav-item link href="#" class="linea" v-for="m in menu" :key="m.text" :to="m.path" v-scroll-to="{el : m.scroll, duration: 3000, easing: 'ease' }"><h3 class="color-secundario">{{m.text}} </h3> </b-nav-item>
        <!-- <b-nav-item href="#" v-scroll-to="'#quienessomos'" class="linea "><h3 class="color-secundario">Quiénes Somos</h3> </b-nav-item>
        <b-nav-item href="#" v-scroll-to="'#soluciones'" class="linea "><h3 class="color-secundario">Soluciones</h3> </b-nav-item>
        <b-nav-item href="#"  class="linea "><h3 class="color-secundario">Catálogo</h3> </b-nav-item>
        <b-nav-item href="#" v-scroll-to="'#testimonios'" class="linea "><h3 class="color-secundario">Testimonios</h3> </b-nav-item> -->
        <!-- <b-nav-item href="#" v-scroll-to="'#contactos'" class="linea "><h3 class="color-secundario">Contacto</h3> </b-nav-item> -->
      </b-navbar-nav>
    </b-collapse>



    </b-container>
  </b-navbar>
  
</template>

<script>
export default {
  name: "Nav",
  data(){
    return {
      menu:[
        { path: '/', text:'INICIO', scroll: '#inicio'},
        { path: '/', text:'QUIÉNES SOMOS', scroll: '#quienessomos'},
        { path: '/', text:'SOLUCIONES', scroll: '#soluciones'},
        { path: '/catalogo', text:'CATÁLOGO', scroll: '#catalogo'},
        { path: '/', text:'TESTIMONIOS', scroll: '#testimonios'},
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.navLogo {
  max-width: 50px;
}




</style>
