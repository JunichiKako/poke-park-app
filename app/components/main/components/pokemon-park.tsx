"use client";

import { Pokemon } from "@/types/pokemon";
import { APIProvider, AdvancedMarker, Map, Pin } from "@vis.gl/react-google-maps";
import Image from "next/image";
import { useMapData } from "../map-provider";

export default function PokemonPark({ pokemons }: { pokemons: Pokemon[] }) {
  const { selectedPokemon } = useMapData();

  const getCenter = () => {
    if (Array.isArray(selectedPokemon.location)) {
      return selectedPokemon.location[0];
    } else {
      return selectedPokemon.location;
    }
  };

  return (
    <div className="flex-1 mb-6">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
        <Map
          className="size-full *:!bg-transparent [&_iframe+div]:!border-ring [&_iframe+div]:rounded-lg"
          defaultCenter={{
            lat: 35.69025034295892,
            lng: 139.69001842593207,
          }}
          defaultZoom={5}
          gestureHandling={"greedy"}
          disableDefaultUI
          mapId={"f7865720b0868f38"}
          center={getCenter() as { lat: number; lng: number } | null}
          zoom={selectedPokemon.location ? 8 : 5}
        >
          {pokemons.map((pokemon) => {
            if (Array.isArray(pokemon.location)) {
              return pokemon.location.map((loc, index) => (
                <AdvancedMarker key={`${pokemon.id}-${index}`} position={loc} title={pokemon.name}>
                  <Pin>
                    <Image
                      src={pokemon.imageURL}
                      alt={pokemon.name}
                      width={80}
                      height={40}
                      className="rounded-full -m-1 overflow-hidden"
                    />
                  </Pin>
                </AdvancedMarker>
              ));
            } else if (pokemon.location) {
              return (
                <AdvancedMarker key={pokemon.id} position={pokemon.location} title={pokemon.name}>
                  <div className="rounded-full -m-1 overflow-hidden">
                    <Pin>
                      <Image
                        src={pokemon.imageURL}
                        alt={pokemon.name}
                        width={100}
                        height={60}
                        className=""
                      />
                    </Pin>
                  </div>
                </AdvancedMarker>
              );
            } else {
              return null;
            }
          })}
        </Map>
      </APIProvider>
    </div>
  );
}
