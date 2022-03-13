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
      <router-link to="/catalogo">
        <font-awesome-icon
          class="color-white bg-dinamico p-2 logo-flotante  "
          size="4x"
          icon="home"
        />
      </router-link>

      <br />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Flotantes",
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
</style>
