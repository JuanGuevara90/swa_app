import Character from '../models/Character';
import OwnCharacter from '../models/OwnCharacter';


export const pipeCharacters = (characters: Character[], query?: string): Character[] => {
  if (!query || query.trim().length === 0) {
    return characters;
  }
  return characters.filter(({  name }) => name.includes(query));
}

export const pipeOwnCharacters = (characters: OwnCharacter[], query?: string): OwnCharacter[] => {
  if (!query || query.trim().length === 0) {
    return characters;
  }
  return characters.filter(({  name }) => name.includes(query));
}