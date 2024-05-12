export type Pokemon = {
    id: number;
    name: string;
    imageURL: string;
    location:
        | { lat: number; lng: number }
        | { lat: number; lng: number }[]
        | undefined;
};
