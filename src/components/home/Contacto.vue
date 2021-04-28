<template>
  <b-container class="container p-md-5">
    <b-row class="justify-content-md-center tarjeta">
      <b-col cols="12" md="8" class="border px-md-5 rounded ">
        <h2 class="display-6 font-weight-bold py-5" align="center">
          ENVÍANOS UN MENSAJE
        </h2>
        <b-form class="forma">
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
                label="Asunto"
                label-for="input-4"
              >
                <b-form-select
                  id="input-4"
                  v-model="form.asunto"
                  :options="asuntos"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>


            <b-form-group id="input-group-8" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              v-model="form.eventoCheck"
              id="form.eventoCheck"
              :aria-describedby="ariaDescribedby"
    
            >
              <br />
              <b-form-checkbox>Tengo una ocasión especial</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>


          <template v-if="form.eventoCheck">
          <b-row>
            <b-col cols="12" md="6">
              <b-form-group id="input-group-5" label="Evento Especial" label-for="input-5">
                <b-form-input
                  v-model="form.fecha_evento"
                  id="input-5"
                  name="evento"
                  placeholder="Fecha especial"
                  type="date"
                >
                </b-form-input>
                 <small>Al brindarnos información de tu evento, nosotros te recordaremos esa fecha especial</small>
              </b-form-group>
             
            </b-col>

            <b-col cols="12" md="6">
              <b-form-group
                id="input-group-6"
                label="¿Cuál es el motivo?"
                label-for="input-6"
              >
                <b-form-select
                  id="input-6"
                  v-model="form.evento"
                  :options="eventos"
                  
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>

          </template>

          <label for="textarea">Mensaje</label>
          <b-form-textarea
            id="textarea-1"
            name="message"
            placeholder="Cuéntanos tu inquietud, nosotros te ayudamos"
            rows="5"
            required
            v-model="form.message"
          >
          </b-form-textarea>

          <b-form-group id="input-group-7" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              v-model="form.checked"
              id="form.checked"
              :aria-describedby="ariaDescribedby"
              required
            >
              <br />
              <b-form-checkbox>No soy un robot florista</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-row>
            <b-col cols="12" md="6">
              <b-button
                type="submit"
                value="Send"
                class="btn-primary bg-primary"
                >Enviar</b-button
              >
            </b-col>
            <b-col cols="12" md="6">
              <b-button type="reset" class="btn-primary bg-primary"
                >Borrar</b-button
              >
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
///import emailjs from "emailjs-com";
export default {
  name: "Contacto",
  data() {
    return {
      form: {
        name: "",
        mail: "",
        phone: "",
        asunto: null,
        message: "",
        checked: false,
        eventoCheck:false,
        fecha_evento: "",
        evento: null,
      },
      asuntos: [
        {
          text: "Elige un Asunto",
          value: null,
        },
        "Colaboración",
        "Galería",
        "Jardín Secreto",
        "Queja y/o Sugerencia",
        "Servicios",
        "Suscripción",
      ],
      eventos: [
        {
          text: "Elige un Motivo",
          value: null,
        },
        "Aniversario",
        "Baby Shower",
        "Bautizo",
        "Cumpleaños",
        "Funeral",
        "Por qué quiero y puedo",
      ],
    };
  },
  methods: {
    onReset(e) {
      e.preventDefault();
      this.form.name = "";
      this.form.mail = "";
      this.form.phone = "";
      this.form.asunto = null;
      this.form.message = "";
      this.form.checked = false;
      this.form.eventoCheck = false;
      this.form.fecha_evento = "";
      this.form.evento = null;
    },
    enviarCorreo(e) {
      e.preventDefault();
      alert(
        "Haz enviado con exito el mensaje, pronto nos pondremos en contacto. Gracias"
      );
    },
  },
};
</script>


<style lang="scss" scoped>
.forma {
  font-family: "GFS Didot", serif;
  text-align: left;
}



.btn {
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-weight: bold;
  font-size: medium;
  margin: 0.5rem;
  min-width: 100%;
}

.bg-primary {
  background-color: #fff !important;
}

.btn-primary {
  color: $secundario;
  border-color: $gris;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
}

.btn-primary:hover {
  color: $primario;
  background-color: #fff !important;
  border-color: $secundario;
}

.btn-primary:active {
  color: $primario !important;
  background-color: rgba(255, 255, 255, 0.95) !important;
  border-color: rgba(28, 86, 50, 0.1) !important;
}

.btn-primary:focus {
  color: $primario !important;
  background-color: rgba(255, 255, 255, 0.95) !important;
  border-color: rgba(28, 86, 50, 0.1) !important;
}
</style>