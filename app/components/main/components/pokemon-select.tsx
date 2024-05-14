"use client";

import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import { useMapData } from "../map-provider";

export default function PokemonSelect({ pokemons }: { pokemons: Pokemon[] }) {
  const { setSelectedPokemon } = useMapData();

  return (
    <div className="flex-1 overflow-y-auto hidden-scrollbar">
      <h2>ポケモンを選んでね。</h2>
      <div className="grid grid-cols-3 gap-3">
        {pokemons.map((pokemon) => {
          return (
            <div
              key={pokemon.id}
              className="rounded-lg shadow-md p-4 relative hover:bg-gray-100 hover:text-black cursor-pointer transition duration-300 ease-in-out"
              onClick={() => {
                console.log("Selected Pokemon", pokemon);
                
                if (pokemon.location) {
                  setSelectedPokemon({
                    location: pokemon.location,
                  });
                }
              }}
            >
              <Image src={pokemon.imageURL} alt={pokemon.name} width={120} height={120} />
              <h2 className="text-xl font-semibold">{pokemon.name}</h2>
              <p>#{pokemon.id}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
