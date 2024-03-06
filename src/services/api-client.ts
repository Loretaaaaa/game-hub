import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "00d0f76c1914449297677814d6d86884",
  },
});
