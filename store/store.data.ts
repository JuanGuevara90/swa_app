import AsyncStorage from "@react-native-async-storage/async-storage";
export const storeData = async (value:Object) => {
    try {
        await AsyncStorage.setItem('@store_app', JSON.stringify(value))
    } catch (e) {
        return "error";
    }
}

export const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@store_app')
        if(value !== null) {
            return JSON.parse(value);
        }
    } catch(e) {
        return "error";
    }
}

export const removeData = async()=>{
    try {
        await AsyncStorage.removeItem('@MyApp_key')
    } catch(e) {
        return "error";
    }
}