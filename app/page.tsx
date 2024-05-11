import { getAllPokemons } from "@/data/pokemon";
import PokemonPark from "./components/pokemon-park";
import SecltedPokemon from "./components/seclted-pokemon";

export default async function Home() {
    const pokemons = await getAllPokemons();

    return (
        <div className="container mt-10 flex gap-4 h-full">
            <SecltedPokemon pokemons={pokemons} />
            <PokemonPark pokemons={pokemons} />
        </div>
    );
}
