import { Pokemon } from "@/types/pokemon";
import Image from "next/image";

interface SelectedPokemonProps {
    pokemons: Pokemon[];
}

// hover時をおしゃれにしたい。
// パラレルルートの実装する？
// ダークモード時のカード borderとかを変えたい。

const SecltedPokemon = ({ pokemons }: SelectedPokemonProps) => {
    return (
        <div className="flex-1 overflow-y-auto hidden-scrollbar">
            <h2>ポケモンを選んでね。</h2>
            <div className="grid grid-cols-3 gap-3">
                {pokemons.map((pokemon) => {
                    return (
                        <div
                            key={pokemon.id}
                            className="rounded-lg shadow-md p-4 relative hover:bg-gray-100 hover:text-black cursor-pointer transition duration-300 ease-in-out"
                        >
                            <Image
                                src={pokemon.sprites.front_default}
                                alt={pokemon.species.name}
                                width={120}
                                height={120}
                            />
                            <h2 className="text-xl font-semibold">
                                {pokemon.species.name}
                            </h2>
                            <p>#{pokemon.id}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SecltedPokemon;
