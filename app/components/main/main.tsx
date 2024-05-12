"use client";

import { Pokemon } from "@/types/pokemon";
import { useState } from "react";
import PokemonPark from "./components/pokemon-park";
import SeletedPokemon from "./components/seleted-pokemon";

export default function Main({ pokemons }: { pokemons: Pokemon[] }) {
    const [selectedPokemon, setSelectedPokemon] = useState<number | null>(null);

    return (
        <div className="container mt-10 flex gap-4 h-full">
            <SeletedPokemon
                pokemons={pokemons}
                setSelectedPokemon={setSelectedPokemon}
            />
            <PokemonPark
                pokemons={pokemons}
                selectedPokemon={selectedPokemon}
            />
        </div>
    );
}
