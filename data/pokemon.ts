// 日本語化を何となくで出来たので、詳細を知りたい
// 全部取得する必要があるのか、必要なポケモンだけでいいのかを考える

export const getAllPokemons = async () => {
    const parkPokemonId = [27, 74, 79, 103, 113];

    return Promise.all(
        parkPokemonId.map(async (id) => {
            const pokemon = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${id}`,
                {
                    method: "GET",
                }
            ).then((response) => {
                return response.json();
            });

            // 日本語の名前を取得
            const pokemonSpecies = await fetch(pokemon.species.url).then(
                (response) => {
                    return response.json();
                }
            );

            pokemon.species = pokemonSpecies.names.find(
                (name: { language: { name: string }; name: string }) =>
                    name.language.name === "ja"
            );

            return pokemon;
        })
    );
};
