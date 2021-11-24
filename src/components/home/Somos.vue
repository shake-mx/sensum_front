<template>
  <b-container>
    <b-row class="text-md-right my-5">
      <b-col
        cols="10"
        md="8"
        class="bg-secundario curva offset-1 offset-md-4 px-5 py-3"
      >
        <h1 class=" color-plata text-uppercase">
          <strong>¿Quienes somos?</strong>
        </h1>
        <h2 class=" color-plata">
          Somos un equipo de profesionales inmobiliarios comprometidos con
          proteger, guiar y conectar los intereses de nuestros clientes,
          aportando soluciones con alto nivel de eficiencia y conforme a valores
          institucionales.
        </h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="10" md="12" class="offset-1 offset-md-0 mb-5 py-3">
            <b-row class="justify-content-between my-1">
              <b-col md="5" class="my-5 " align-self="stretch">
                <h3
                  class="text-uppercase color-secundario text-center subrayado mt-4 titulo"
                >
                  Misión
                </h3>
                <ul class="mt-4 text-left px-0 px-md-3">
                  <li class=" color-gris  sensum">
                    Solucionar problemas inmobiliarios
                  </li>
                  <li class=" color-gris  sensum">
                    Proteger el patrimonio de todas las partes en el negocio
                    inmobiliario
                  </li>
                  <li class=" color-gris  sensum">
                    Guiar las operaciones de compra, venta y renta, con
                    veracidad y transparencia
                  </li>
                  <li class=" color-gris  sensum">
                    Conectar personas e intereses
                  </li>
                </ul>
              </b-col>
              <b-col md="5" class="my-5" align-self="stretch">
                <h3
                  class="text-uppercase color-secundario text-center subrayado mt-4 titulo"
                >
                  Valores
                </h3>
                <ul class="mt-4 text-left px-0 px-md-3 ">
                  <li class=" color-gris  sensum">Trabajo en Equipo</li>
                  <li class=" color-gris  sensum">Mejora Constante</li>
                  <li class=" color-gris  sensum">Competitividad</li>
                  <li class=" color-gris  sensum">Innovación</li>
                  <li class=" color-gris  sensum">Tomar Acción</li>
                  <li class=" color-gris  sensum">Atención con Enfoque al Cliente</li>
                  <li class=" color-gris  sensum">Confianza</li>
                  <li class=" color-gris  sensum">Determinación</li>
                  <li class=" color-gris  sensum">Constancia</li>
                  <li class=" color-gris  sensum">Lealtad</li>
                </ul>
              </b-col>
            </b-row>
 
      </b-col>
    </b-row>
    <br />
    <hr class="bg-secundario w-75 " />
    <br />
    <br />
    <b-row class="text-center my-5">
      <b-col class="curva  px-5 py-3">
        <h1 class=" color-secundario text-uppercase">
          <strong>Acerca de Nosotros</strong>
        </h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12" class="mb-5">
        <b-row class="justify-content-around">
          <b-col
          cols="11"
            md="5"
            class="bg-secundario p-5 mx-1 my-3 curva border shadow-sm"
            align-self="stretch"
          >
            <h3 class="text-uppercase color-plata">
              Comprometidos con dar resultados
            </h3>
            <h4 class="mt-4 color-plata">
              Hemos promovido, guiado y cerrado la venta de inmuebles con un
              valor en conjunto de más de $250,000,000. En Sensum, ¡Sí vendes!
              ¡Sí rentas! ¡Sí compras!
            </h4>
          </b-col>
          <b-col cols="11" md="5" class="p-5 mx-1 my-3 curva border shadow-sm" align-self="stretch">
            <h3 class="text-uppercase color-secundario">
              Liderazgo
            </h3>
            <h4 class="mt-4 color-secundario">
              El equipo Sensum ha sido líder de resultados en las distintas
              empresas con las que ha colaborado, tales como, Hogares Unión,
              Grupo Coeinin, Casas Quma y Century 21
            </h4>
          </b-col>

          <b-col
          cols="11"
            md="5"
            class="bg-secundario p-5 mx-1 my-3 curva border shadow-sm order-md-2"
            align-self="stretch"
          >
            <h3 class="text-uppercase color-plata">
              Profesionales Inmobiliarios
            </h3>
            <h4 class="mt-4 color-plata">
              Somos profesionales certificados ante CONOCER, SEP e INFONAVIT, en
              los distintos campos del sector de los bienes raíces, lo que nos
              permite asesorar, promover, mediar y gestionar con eficacia la
              compraventa y renta de inmuebles
            </h4>
          </b-col>
          <b-col
          cols="11"
            md="5"
            class="p-5 mx-1 my-3 curva border shadow-sm order-md-1"
            align-self="stretch"
          >
            <h3 class="text-uppercase color-secundario">
              Enfoque Humano
            </h3>
            <h4 class="mt-4 color-secundario">
              Nuestros procesos brindan soluciones con un enfoque basado en las
              personas, en proteger sus intereses y cuidar el negocio
              inmobiliario
            </h4>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Somos",
};
</script>

<style lang="scss" scoped>
.titulo {
  min-height: 60px;
}
</style>
