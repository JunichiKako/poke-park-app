"use client";

import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const container = {
    width: "100%",
    height: "460px",

};

const position = {
    lat: 34.24731704584732,
    lng: 133.93299939792632,
};

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

if (!googleMapsApiKey) {
    throw new Error("APIが適切に設定されていません。");
}

export default function PokemonPark() {
    return (
        <div className="flex-1 overflow-y-auto hidden-scrollbar">
            <h2>Poke Park Map</h2>
            <div className="w-full rounded-md">
                <LoadScript googleMapsApiKey={googleMapsApiKey}>
                    <GoogleMap
                        mapContainerStyle={container}
                        center={position}
                        zoom={15}

                    >
                        <MarkerF position={position} label={"ヤドン公園"} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
}
