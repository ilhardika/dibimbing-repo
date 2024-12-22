import Axios from "axios";

const getPokemon = async () => {
  try {
    const res = await Axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
    );
    return res.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

export default getPokemon;
