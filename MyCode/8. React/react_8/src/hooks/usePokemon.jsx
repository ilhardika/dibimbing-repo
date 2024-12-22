import { useState } from "react";
import getPokemon from "../api/getPokemon";

const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    try {
      const res = await getPokemon();
      setPokemonList(res);
    } catch (error) {
      console.error(error);
    }
  };

  return { pokemonList, fetchPokemon };
};

export default usePokemon;
