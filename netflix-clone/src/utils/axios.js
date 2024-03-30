import axios from "axios";

const instance = axios.create({
  baseuURL: "https://api.themoviedb.org/3",
});
export default instance;
