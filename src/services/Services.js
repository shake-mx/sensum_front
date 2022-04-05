import axios from "axios";

const baseURL = "https://sensum-api-i5dl7.ondigitalocean.app/";

export default axios.create(
  {
    baseURL,
  },
);
