import Character from '../../models/Character';

export const pipeCharacters = (characters: Character[], query?: string): Character[] => {
  if (!query || query.trim().length === 0) {
    return characters;
  }
  return characters.filter(({  name }) => name.includes(query));
}