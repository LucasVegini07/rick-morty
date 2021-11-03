import axios from "axios";

export const getChacarters = async () => {
  const baseUrl = "https://rickandmortyapi.com/api/character?";
  return await axios
    .get(`${baseUrl})`)
    .then((res) => res)
    .catch((err) => err.response);
};
