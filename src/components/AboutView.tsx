import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AboutView = () => {
  const [pokemon, setPokemon] = useState({
    name: "",
    sprites: {
      front_shiny: "",
      back_shiny: "",
    },
    types: {
      type: "", 
    },
    
    }  );
  const { idx } = useParams();
  const API = `https://pokeapi.co/api/v2/pokemon/${idx}/`;
  // console.log(idx);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
        console.log(pokemon);
      });
  }, []);
  return (
    <div className="about">
      <div className="w-3/12 m-auto bg-purple-100 mt-4 shadow-2xl flex justify-center flex-col items-center">
        <h3 className="text-2xl text-green-900 uppercase"> </h3>
        <div className="flex justify-center">
        </div>
        <h3 className="text=yellow-400">Types</h3>
      </div>
    </div>
  );
};

export default AboutView;
