import { API } from "@env";
import Character from "../models/Character";
export const getCharacters =async (parm:string)=>{
    let response = await fetch(API+parm);
    let values = await response.json();
    let resul = await values.results;
    return resul;
}