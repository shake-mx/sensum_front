<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/home/Home';

export default {
  name: 'App',
  created () {
            document.title = "Sensum Soluciones Inmobiliarias";
        },
  components: {
    Home
  }
}
</script>

<style lang="scss">

#app {
  font-family: "Cerebri Sans Book", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.titulo-valores {
  color: $primario;
  
}

.subtitulo-valores {
  color: $secundario;
  
}

</style>
