import { useState } from 'react';
import { API } from "@env";
import Character from "../models/Character";
import axios from 'axios';
import { CharacterDetail } from '../models/CharacterDetail';

/* export const getCharacters = () => {

    const [result,setResult] = useState<Character[]>()
    const consume = async()=>{
        let response = await fetch(`${API}/character`);
        let values = await response.json();
        let resul = await values.results;
        setResult(resul)
    }
    consume();
    return result;
} */

export const getCharacters = (page?:number) => axios.get<{ results: Character[],info:{pages:number} }>(`${API}/character?page=${page}`);
export const getCharacterDetail = (query:string) => axios.get<CharacterDetail>(query);