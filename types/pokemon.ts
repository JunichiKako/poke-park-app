export interface Pokemon {
    id: number;
    species: {
        name: string;
    };
    sprites: {
        front_default: string;
    };
}