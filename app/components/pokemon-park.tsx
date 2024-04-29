"use client";

import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const container = {
    width: "100%",
    height: "460px",
};

const position = {
    lat: 35.182253007459444,
    lng: 136.90534328438358,
};

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

if (!googleMapsApiKey) {
    throw new Error("APIが適切に設定されていません。");
}

export default function PokemonPark() {
    return (
        <div className="flex-1 overflow-y-auto hidden-scrollbar bg-red-500">
            <h2>Poke Park Map</h2>
            <div className="w-full">
                <LoadScript googleMapsApiKey={googleMapsApiKey}>
                    <GoogleMap
                        mapContainerStyle={container}
                        center={position}
                        zoom={15}
                    >
                        <MarkerF position={position} label={"名古屋城"} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
}
