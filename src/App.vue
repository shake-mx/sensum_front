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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.titulo-valores {
  color: $primario;
  
}

.subtitulo-valores {
  color: $secundario;
  
}

</style>
