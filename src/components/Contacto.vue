<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col cols="12" md="10">
        <b-form class="forma" @submit="enviarCorreo">
          <b-row>
            <b-col cols="12" md="6">
              <b-form-group
                id="input-group-1"
                label="Nombre"
                label-for="input-1"
              >
                <b-form-input
                  v-model="form.name"
                  id="input-1"
                  name="name"
                  placeholder="Ingresa tu nombre"
                  required
                  type="text"
                >
                </b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <b-form-group
                id="input-group-2"
                label="Teléfono"
                label-for="input-2"
              >
                <b-form-input
                  v-model="form.phone"
                  id="input-2"
                  name="phone"
                  placeholder="Ingresa tu teléfono"
                  required
                  type="tel"
                >
                </b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col cols="12" md="6">
              <b-form-group id="input-group-3" label="Mail" label-for="input-3">
                <b-form-input
                  v-model="form.mail"
                  id="input-3"
                  name="mail"
                  placeholder="Ingresa tu correo"
                  required
                  type="email"
                >
                </b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="12" md="6">
              <b-form-group
                id="input-group-4"
                label="Anuncio"
                label-for="input-4"
              >
                <b-form-select
                  id="input-4"
                  v-model="form.anuncio"
                  :options="anuncios"
                  required
                  name="anuncio"
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>

          <b-form-group id="input-group-8" v-slot="{ ariaDescribedby }">
            <input
              v-model="form.eventoCheck"
              id="form.eventoCheck"
              :aria-describedby="ariaDescribedby"
              name="eventoCheck"
              type="checkbox"
            />
            <label for="form.eventoCheck" class="ml-2"
              >Tengo una Solicitud Especial</label
            >
          </b-form-group>

          <template v-if="form.eventoCheck">
            <b-row>
              <b-col cols="12" md="3">
                <b-form-group
                  id="input-group-5"
                  label="Valor Mínimo"
                  label-for="input-5"
                >
                  <b-form-input
                    v-model="form.monto_minimo"
                    id="input-5"
                    name="monto_minimo"
                    placeholder="Monto Mínimo"
                    type="number"
                  >
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" md="3">
                <b-form-group
                  id="input-group-9"
                  label="Valor Máximo"
                  label-for="input-9"
                >
                  <b-form-input
                    v-model="form.monto_maximo"
                    id="input-9"
                    name="monto_maximo"
                    placeholder="Monto Máximo"
                    type="number"
                  >
                  </b-form-input>
                </b-form-group>
              </b-col>

              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-6"
                  label="Tipo de Propiedad"
                  label-for="input-6"
                >
                  <b-form-select
                    id="input-6"
                    v-model="form.tipo_propiedad"
                    :options="tipos_propiedad"
                    name="tipo_propiedad"
                  ></b-form-select>
                </b-form-group>
              </b-col>
            </b-row>
          </template>

          <label for="textarea">Comentario</label>
          <b-form-textarea
            id="textarea-1"
            name="message"
            placeholder="Cuéntanos tu inquietud, zona de búsqueda, nosotros te ayudamos"
            rows="5"
            required
            v-model="form.message"
          >
          </b-form-textarea>

          <b-form-group id="input-group-7" v-slot="{ ariaDescribedby }">
            <input
              class="mt-3"
              v-model="form.checked"
              id="form.checked"
              :aria-describedby="ariaDescribedby"
              required
              type="checkbox"
            />
            <label for="form.checked" class="ml-2">No soy un robot</label>
          </b-form-group>

          <b-row>
            <template v-if="form.checked === false">
              <b-col cols="12" md="6" class="text-center">
                <b-button disabled type="submit" value="Send" class="btnEnviar"
                  >Enviar</b-button
                >
              </b-col>
            </template>
            <template v-else>
              <b-col cols="12" md="6" class="text-center ">
                <b-button type="submit" value="Send" class="btnEnviar"
                  >Enviar</b-button
                >
              </b-col>
            </template>
            <b-col cols="12" md="6" class="text-center mt-3">
              <b-button type="reset" class="btnEnviar">Borrar</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "Contacto",
  data() {
    return {
      form: {
        name: "",
        mail: "",
        phone: "",
        anuncio: null,
        message: "",
        checked: false,
        eventoCheck: false,
        monto_minimo: 0,
        monto_maximo: 0,
        tipo_propiedad: null,
      },
      anuncios: [
        {
          text: "Tipo de Anuncio",
          value: null,
        },
        "Renta",
        "Venta",
      ],
      tipos_propiedad: [
        {
          text: "Tipo Propiedad",
          value: null,
        },
        "Casa",
        "Departamento",
        "Oficina",
        "Terreno",
        "Remate",
      ],
    };
  },
  methods: {
    onReset(e) {
      e.preventDefault();
      this.form.name = "";
      this.form.mail = "";
      this.form.phone = "";
      this.form.anuncio = null;
      this.form.message = "";
      this.form.checked = false;
      this.form.eventoCheck = false;
      this.form.monto_minimo = 0;
      this.form.monto_maximo = 0;
      this.form.tipo_.propiedad = null;
    },
    enviarCorreo(e) {
      e.preventDefault();
      alert(
        "Haz enviado con exito el mensaje, pronto nos pondremos en contacto. Gracias"
      );
      try {
        emailjs.sendForm(
          "service_g8uwlxg",
          "template_wnbfzoq",
          e.target,
          "user_gGHZQEDHJmDEjuOwEPoep",
          {
            name: this.form.name,
            message: this.form.message,
            mail: this.form.mail,
            phone: this.form.phone,
            anuncio: this.form.anuncio,
            tipo_propiedad: this.form.tipo_propiedad,
            monto_minimo: this.form.monto_minimo,
            monto_maximo: this.form.monto_maximo,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      this.form.name = "";
      this.form.mail = "";
      this.form.phone = "";
      this.form.anuncio = null;
      this.form.message = "";
      this.form.checked = false;
      this.form.eventoCheck = false;
      this.form.monto_minimo = 0;
      this.form.monto_maximo = 0;
      this.form.tipo_.propiedad = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.forma {
  border-radius: 15px;
  background-color: $secundario;
  padding: 1rem;
}

.btnEnviar {
  padding: 0.3rem 3rem;
  font-size: larger;
  border-radius: 0.5rem;
  background-color: $fondo;
  color: $secundario;
  border: none;
  box-shadow: 0px 15px 20px rgba($color: $gris, $alpha: 0.25);
  font-weight: 500;
  transition: all 0.5s ease;
}

.btnEnviar:hover {
  background-color: $secundario !important;
  color: $fondo !important;
  outline: 0 !important;
  transition: all 0.5s ease;
  transform: translateY(-2px);
}

.btnEnviar:focus,
.btnEnviar:active,
.btnEnviar:visited,
.btnEnviar:focus-visible,
.btn-secondary:not(:disabled):not(.disabled).active {
  background-color: $fondo;
  color: $secundario;
  border: none;
  outline: 0 !important;
  transition: all 0.5s ease;
  transform: translateY(-2px);
  box-shadow: 0px 15px 20px rgba($color: $gris, $alpha: 0.25);
}
</style>
