import { useEffect } from "react";
import usePokemon from "../../hooks/usePokemon";
import getCurrentDate from "../../utils/currentDate";

const Home = () => {
  const { pokemonList, fetchPokemon } = usePokemon();

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="mx-10">
      <h1 className="text-3xl font-bold text-center my-10">Pokemon List</h1>
      <h1 className="my-5">Current Date: {getCurrentDate()}</h1>

      <div>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            <a href={pokemon.url} className="text-blue-600 italic">
              {pokemon.name}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Home;
