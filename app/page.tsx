import { getAllPokemons } from "@/data/pokemon";
import Main from "./components/main/main";

export default async function Home() {
    const pokemons = await getAllPokemons();

    return (
        <div className="container mt-10 flex gap-4 h-full">
            <Main pokemons={pokemons} />
        </div>
    );
}
