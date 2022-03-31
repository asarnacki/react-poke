import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

interface IType {
  name: string;
  sprites: {
    front_shiny: string;
    back_shiny: string;
  };
  types: [
    {
      type: { 
        name: string 
      };
      slot: string;
    }
  ];
}

const AboutView = () => {
  const [type, setType] = useState<IType>();
  const { idx } = useParams();
  const API = `https://pokeapi.co/api/v2/pokemon/${idx}/`;
  const getType = useCallback(async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setType(data);
    } catch (e) {
      console.log(e);
    }
    return { type };
  }, [API, type]);

  useEffect(() => {
    const interval = setInterval(() => {
      getType();
      console.log(type);
    }, 1000);
    return () => clearInterval(interval);
  }, [getType, type]);

  return (
    <div className="about">
      <div className="w-3/12 m-auto bg-purple-100 mt-4 shadow-2xl flex justify-center flex-col items-center">
        <h3 className="text-2xl text-green-900 uppercase">{type?.name} </h3>
        <div className="flex justify-center">
          <img
            className="w-48"
            src={type?.sprites.front_shiny}
            alt={type?.name}
          ></img>
          <img
            className="w-48"
            src={type?.sprites.back_shiny}
            alt={type?.name}
          ></img>
        </div>
        <h3 className="text=yellow-400">Types</h3>
        <div>
          {type?.types.map((x) => (
            <h5 className="text-blue-900">{x.type.name}</h5>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutView;
