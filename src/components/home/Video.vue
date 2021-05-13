<template>
  <div>
    <video class="videoPeony" type="video" playsinline autoplay muted loop>
      <source src="@/assets/peony.mp4" type="video/mp4" /> 
    </video>
   
    <video class="videoPeony916" type="video" playsinline autoplay muted loop>
      <source src="@/assets/peony9x16.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: "Video",
};
</script>

<style scoped>
.videoPeony {
  width: 100%    !important;
  height: auto   !important;
}

@media only screen and (max-width: 767px) {
  .videoPeony {
    display: none;
  }
}

.videoPeony916 {
   width: 100%    !important;
  height: auto   !important;
}

@media only screen and (min-width: 768px) {
  .videoPeony916 {
    display: none;
  }
}
</style>