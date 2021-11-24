<template>
  <b-container fluid class="bghero-parallax vertical-center-servicios">
    <b-container class="py-5">
      <b-row class="text-center bg-hero curva" >
        <b-col cols="12" class="py-3">
          <h2 class="color-gris text-uppercase">
            <strong>Soluciones Inmobiliarias</strong>
          </h2>
          <br>
          <br>
          <h3 class=" color-gris">
              Estamos comprometidos con aportar soluciones inmobiliarias 
              que permitan dar certeza a la realización exitosa de los negocios inmobiliarios.
              <br>Para el equipo de colaboradores de nuestra empresa, dar resultados se traduce
               en cumplir objetivos de forma eficiente y consientes del valor del patrimonio de
                todos nuestros clientes; en "Sensum, Soluciones Inmobiliarias", realizamos negocios
                 inmobiliarios con un profundo sentido humano
          </h3>
        </b-col>
          <b-col md="12">
          <b-row class="justify-content-between my-1" align-v="stretch">
            <b-col md="4" class="my-5">
              <img
                src="@/assets/servicios/01.png"
                alt="Asesoría Inmobiliaria"
                class="img-fluid curva"
              />
              <h3
                class="text-uppercase color-gris display-5 text-center subrayado mt-4 titulo "
              >
                Asesoría Inmobiliaria
              </h3>
              <h5 class="mt-4 color-gris text-justify ">
                Asesoría sobre aspectos comerciales, fiscales, y legales de la
                comercialización de inmuebles, así como, todo lo relacionado a
                contratos, documentación y escrituración ante Notario.
              </h5>
            </b-col>
            <b-col md="4" class="my-5">
              <img
                src="@/assets/servicios/02.png"
                alt="Asesoría Inmobiliaria"
                class="img-fluid curva"
              />
              <h3
                class="text-uppercase color-gris display-5 text-center subrayado mt-4 titulo"
              >
                Estudio de Factibilidad Comercial
              </h3>
              <h5 class="mt-4 color-gris text-justify">
                Elaboración y presentación de un Análisis de Mercado Comparativo
                y Diagnóstico Jurídico que determinen el valor comercial del
                inmueble, su estatus legal y la factibilidad de poder vender o
                rentar.
              </h5>
            </b-col>

            <b-col md="4" class="my-5">
              <img
                src="@/assets/servicios/03.png"
                alt="Asesoría Inmobiliaria"
                class="img-fluid curva"
              />
              <h3
                class="text-uppercase color-gris display-5 text-center subrayado mt-4 titulo"
              >
                Promoción Especializada
              </h3>
              <h5 class="mt-4 color-gris text-justify">
                Empleamos los canales de venta más especializados en el sector
                de bienes raíces, pudiendo ser desde la colocación de lonas,
                volantes, la promoción en ferias de vivienda, stands, así como,
                en medios digitales como pagina WEB, redes sociales, portales
                inmobiliarios y google ads.
              </h5>
            </b-col>
          </b-row>

          <b-row class="justify-content-between my-5" align-v="stretch">
            <b-col md="4" class="my-5">
              <img
                src="@/assets/servicios/04.png"
                alt="Asesoría Inmobiliaria"
                class="img-fluid curva"
              />
              <h3
                class="text-uppercase color-gris display-5 text-center subrayado mt-4 titulo"
              >
                Mediación Inmobiliaria
              </h3>
              <h5 class="mt-4 color-gris text-md-left text-center">
                Negociación con el fin de conciliar intereses, proteger su
                patrimonio y guiar la operación buscando un "ganar ganar" ente
                las partes involucradas en los negocios inmobiliarios.
              </h5>
            </b-col>

            <b-col md="4" class="my-5">
              <img
                src="@/assets/servicios/06.png"
                alt="Asesoría Inmobiliaria"
                class="img-fluid curva"
              />
              <h3
                class="text-uppercase color-gris display-5 text-center subrayado mt-4 titulo"
              >
                Gestoría Inmobiliaria
              </h3>
              <h5 class="mt-4 color-gris text-justify">
                Acompañamiento y guía en el proceso de trámite de
                certificaciones con el municipio, realización de avaluos,
                seguimiento con las diferentes insituciones de crédito
                hipotecario y durante la escrituración ante Notario.
              </h5>
            </b-col>
            <b-col md="4" class="my-5">
              <img
                src="@/assets/servicios/05.png"
                alt="Asesoría Inmobiliaria"
                class="img-fluid curva"
              />
              <h3
                class="text-uppercase color-gris display-5 text-center subrayado mt-4 titulo"
              >
                Representación ante Terceros
              </h3>
              <h5 class="mt-4 color-gris text-justify">
                Asesorar y representar al comprador de un inmueble para proteger
                sus intereses en una compraventa de "trato directo" con el
                propietario y/o con una agencia inmobiliaria distinta a "Sensum,
                Soluciones Inmobiliarias".
              </h5>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "Soluciones",
};
</script>

<style lang="scss" scoped>
.titulo {
  min-height: 60px;
}


.bghero-parallax {
  background: url("~@/assets/hero1.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
}


.bghero-parallax {
  background: url("~@/assets/hero1.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
}


@media only screen and (max-width: 576px) {
.bghero-parallax {
  background-repeat: no-repeat;
  background-size: auto;
}
}



</style>
