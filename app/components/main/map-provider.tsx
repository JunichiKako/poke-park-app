"use client";

import { ReactNode, createContext, useContext, useState } from "react";

type PokemonLocation = { lat: number; lng: number };

type ContextType = {
  selectedPokemon: {
    location: PokemonLocation | PokemonLocation[] | null;
  };
  setSelectedPokemon: (pokemon: { location: PokemonLocation | PokemonLocation[] | null }) => void;
  // map: google.maps.Map | null;
  // setMap: (map: google.maps.Map) => void;
};

const Context = createContext<ContextType>({} as ContextType);

export function MapDataProvider({ children }: { children: ReactNode }) {
  const [selectedPokemon, setSelectedPokemon] = useState<{
    location: PokemonLocation | PokemonLocation[] | null;
  }>({ location: null });

  // const [map, setMap] = useState<google.maps.Map | null>(null);

  // useEffect(() => {
  //   console.log("selectedPokemon changed:", selectedPokemon); // 追加
  //   console.log("map instance:", map); // 追加

  //   if (selectedPokemon.location && map) {
  //     const location = selectedPokemon.location;
  //     if (Array.isArray(location)) {
  //       map.panTo(location[0]); // 複数の位置がある場合は最初の位置にズーム
  //     } else {
  //       map.panTo(location);
  //     }
  //     map.setZoom(15); // ズームレベルは適宜調整
  //   }
  // }, [selectedPokemon, map]);

  return (
    <Context.Provider value={{ selectedPokemon, setSelectedPokemon }}>{children}</Context.Provider>
  );
}

export const useMapData = () => useContext(Context);
