import { API } from "@env";
import Character from "../models/Character";
import axios from 'axios';

export const getCharacters = (page?:number) => axios.get<{ results: Character[],info:{pages:number} }>(`${API}/character?page=${page}`);
export const getCharacterDetail = (query:string) => axios.get<Character>(query);