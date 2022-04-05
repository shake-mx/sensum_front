<template>
  <div class="flotante">
    <div>
      <a
        href="https://wa.me/5215630296930?text=Hola%20Sensum%20"
        target="__blank"
      >
        <font-awesome-icon
          class="color-white whatsapp p-2 logo-flotante"
          size="4x"
          :icon="['fab', 'whatsapp']"
        />
      </a>
      <br />
      <a href="https://www.facebook.com/holasensum/" target="__blank">
        <font-awesome-icon
          class="color-white facebook p-2 logo-flotante"
          size="4x"
          :icon="['fab', 'facebook-f']"
        />
      </a>
      <br />
      <router-link  :to="'/catalogo'" >
        <font-awesome-icon
          class="color-white bg-dinamico p-2 logo-flotante  "
          size="4x"
          icon="home"
        />
      </router-link>

      <br />
    </div>
     <!-- INICIO TOP SCROLL -->

    <a id="topscroll" @click="irTopScroll"><font-awesome-icon
          class="mt-1"
          size="3x"
          icon="angle-up"
        /></a>

    <!-- FIN TOP SCROLL  -->
  </div>
</template>

<script>

export default {
  name: "Flotantes",
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods:{
    irTopScroll(){
      document.getElementById("inicio").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    handleScroll() {
      if (window.scrollY > 300) {
        document.getElementById("topscroll").style.opacity = "1";
        document.getElementById("topscroll").style.visibility = "visible";
      } else {
        document.getElementById("topscroll").style.opacity = "0";
        document.getElementById("topscroll").style.visibility = "hidden";
      }
    },
  },
  
};
</script>

<style lang="scss" scoped>
.flotante {
  position: fixed;
  right: 0;
  top: 80%;
  z-index: 9999;
  transform: translate(0px, -50%);
  text-align: center;
}

.whatsapp {
  color: #fff !important;
  background-color: #25d366 !important;
}

.facebook {
  color: #fff !important;
  background-color: #3b5998 !important;
}

.logo-flotante {
  border-radius: 15px;
  width: 60px !important;
  height: 60px !important;
  margin: 0.2rem 0.3rem;
}


#topscroll {
    display: inline-block;
    background-color: $secundario;
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 50px;
    position: fixed;
    bottom: 5px;
    right: 100%;
    transition: background-color .3s, 
      opacity .5s, visibility .5s;
    opacity: 0;
    visibility: hidden;
    z-index: 1000;
  }

  #topscroll:hover {
    cursor: pointer;
    background-color: rgba($color: $secundario, $alpha: 0.6);
  }
  #topscroll:active {
    background-color: rgba($color: $secundario, $alpha: 0.8);
  }
  #topscroll.show {
    opacity: 0;
    visibility: hidden;
  }
  
  
</style>
