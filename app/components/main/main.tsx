"use client";

import { Pokemon } from "@/types/pokemon";
import PokemonPark from "./components/pokemon-park";
import SecltedPokemon from "./components/seclted-pokemon";
import { useState } from "react";

export default function Main({ pokemons }: { pokemons: Pokemon[] }) {
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    return (
        <div className="container mt-10 flex gap-4 h-full">
            <SecltedPokemon pokemons={pokemons} />
            <PokemonPark pokemons={pokemons} />
        </div>
    );
}
