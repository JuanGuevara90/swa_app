export default interface CharacterModel {
    id?:       number;
    name?:     string;
    status?:   boolean;
    species?:  string;
    type?:     string;
    gender?:   Gender;
    origin?:   Location;
    location?: Location;
    image?:    string;
    episode?:  string[];
    url?:      string;
    created?:  string;
    description?: string;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
