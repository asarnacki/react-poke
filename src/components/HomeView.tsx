import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";

export interface IPokemon {
  name: string;
  url: string;
}

export interface IResults {
  name: string;
  url: string;
}

const HomeView: FunctionComponent<IPokemon> = () => {
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  // const [pokemon, setPokemon] = useState();
  const API = "https://pokeapi.co/api/v2/pokemon?offset=0";

  const getPokemons = useCallback(async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0");
      const data = await res.json();
      setPokemon(data.results);
    } catch (e) {
      console.log(e);
    }
    return { pokemon };
  }, [pokemon]);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);
  return (
    <>
      <div className="w-full flex justify-center">
        <input
          placeholder="Enter pokemon here..."
          className="mt-10 p-2 border-blue-500 border-2"
          // value={this.state.text}
          // onChange={this.handleChange}
        ></input>
      </div>
      <div className="mt-10 p4 flex flex-wrap justify-center">
        <div className="ml-4 text-2px text-blue-400">
          {console.log(pokemon)}
          {pokemon.map((item, idx) => (
            <Link
              to={{
                pathname: `/about/${idx}`,
                // state: item.results.name,
              }}
            > 
              {item.name}{" "}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeView;
