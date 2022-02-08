import axios from "axios";

const baseURL = "https://sensum-api-i5dl7.ondigitalocean.app/propiedades/";

export default axios.create(
  {
    baseURL,
  },
);
