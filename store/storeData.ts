import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_NAME } from "@env";

export const storeData = async ( value:Object ) => {
    try {
        await AsyncStorage.setItem(STORAGE_NAME, JSON.stringify(value))
    } catch (e) {
        return "error";
    }
}

export const getData = async () => {
    try {
        const value = await AsyncStorage.getItem(STORAGE_NAME)
        if(value !== null) {
            return JSON.parse(value);
        }
    } catch(e) {
        return "error";
    }
}

export const removeData = async () => {
    try {
        await AsyncStorage.removeItem(STORAGE_NAME)
    } catch(e) {
        return "error";
    }
}