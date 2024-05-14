export type Pokemon = {
    id: string;
    name: string;
    imageURL: string;
    location?:
        | { lat: number; lng: number }
        | { lat: number; lng: number }[]
        | null
};
