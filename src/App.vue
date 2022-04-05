<template>
  <div >
        <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
 

}
</script>

<style lang="scss">

#app {
  font-family: "Cerebri Sans Book", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $fondo;
}
.titulo-valores {
  color: $primario;
  
}

.subtitulo-valores {
  color: $secundario; 
}



</style>
