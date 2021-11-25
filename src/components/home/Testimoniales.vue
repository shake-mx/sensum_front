<template>
  <b-container fluid >
    <b-container class="py-5">
      <b-row class="text-center curva" >
        <b-col cols="12" class="py-3">
          <h1 class="color-secundario text-uppercase">
            <strong>Testimonios</strong>
          </h1>
        </b-col>
        <b-col cols="12" md="10" class="mx-auto my-5">
          <b-carousel :interval="4000" controls indicators fade>
           <b-carousel-slide >
              <template v-slot:img>
                <b-container class="bg-secundario testimonios">
                  <b-row align-v="stretch">
                    <b-col>
                      <br>
                      <br>
                      <h2 class="text-uppercase"><strong>"Una foto que lo diga todo"</strong></h2>
                      <br>
                      <h4 class="px-4 mx-5">Cuando contacte a la inmobiliaria tenía un problema 
                        familiar muy fuerte y solo se podía solucionar con la 
                        venta de mi casa. El asesor me atendió muy amablemente, 
                        me escuchó y me dijo que era lo que teníamos que hacer 
                        para poder vender lo mas pronto posible. Después de un 
                        par de meses, lograron encontrar un comprador y se comenzaron 
                        todos los trámites en Notaria para la venta. <br>El día 
                        que firmamos escrituras supe que por fin se solucionarían 
                        nuestros problemas económicos. Al final del día me acerqué 
                        al asesor para que nos tomáramos ¡una foto que lo diga todo!</h4>
                      <blockquote class="blockquote font-italic"><h3>Sra. Ángeles Rivera</h3></blockquote>
                      <br>
                      <br>
                    </b-col>
                  </b-row>
                </b-container>
              </template>
            </b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "TitularServicios",
};
</script>

<style lang="scss" scoped>
.titulo {
  min-height: 60px;
}

.testimonios{
  border-radius: 90px 0px 90px 0px;
}

</style>
