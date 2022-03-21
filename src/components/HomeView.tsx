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

const HomeView: FunctionComponent<IPokemon> = () => {
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  const [query, setQuery] = useState("");
  // const API = "https://pokeapi.co/api/v2/pokemon?offset=0";

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
          onChange={(event) => setQuery(event.target.value)}
          className="mt-10 p-2 border-blue-500 border-2"
        ></input>
      </div>
      <div className="mt-10 p4 flex flex-wrap justify-center">
        <div className="ml-4 text-2px text-blue-400">
          {pokemon
            .filter((post) => {
              if (query === "") {
                return post;
              } else if (
                post.name.toLowerCase().includes(query.toLocaleLowerCase())
              ) {
                return post;
              }
            })
            .map((item, idx) => (
              <Link
                key={idx+1}
                to={{
                  pathname: `/about/${idx+1}`,
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
