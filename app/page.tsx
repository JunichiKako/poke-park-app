import { getAllPokemons } from "@/data/pokemon";
import { MapDataProvider } from "./components/main/map-provider";
import PokemonPark from "./components/main/components/pokemon-park";
import PokemonSelect from "./components/main/components/pokemon-select";

export default async function Home() {
  const pokemons = await getAllPokemons();

  return (
    <div className="container mt-10 flex gap-4 h-full">
      <MapDataProvider>
        <PokemonSelect pokemons={pokemons} />
        <PokemonPark pokemons={pokemons} />
      </MapDataProvider>
    </div>
  );
}
