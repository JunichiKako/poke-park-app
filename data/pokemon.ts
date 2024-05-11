// 日本語化を何となくで出来たので、詳細を知りたい
// 全部取得する必要があるのか、必要なポケモンだけでいいのかを考える

import { parkPokemos } from "./filter-pokemon";

export const getAllPokemons = async () => {
    const parkPokemonIds = parkPokemos.map((pokemon) => pokemon.id);

    return Promise.all(
        parkPokemonIds.map(async (id) => {
            const pokemon = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${id}`,
                {
                    method: "GET",
                }
            )
                .then((response) => {
                    return response.json();
                })
                .catch((error) => {
                    throw new Error(error);
                });

            // idからlocationを取得
            const location = parkPokemos.find((p) => p.id === id)?.location;

            // 日本語の名前を取得
            const speciesResponse = await fetch(pokemon.species.url);
            const pokemonSpecies = await speciesResponse.json();
            const japaneseName = pokemonSpecies.names.find(
                (name: { language: { name: string } }) =>
                    name.language.name === "ja"
            ).name;

            return {
                id: pokemon.id,
                name: japaneseName,
                imageURL: pokemon.sprites.front_default,
                location: location,
            };
        })
    );
};
