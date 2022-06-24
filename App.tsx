import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { MyTabs } from "./components/tabs/MyTabs";
import { RootStackParamList } from "./screens/RootStackParamList";

import HomeScreen from "./screens/homeScreen";
import DetailsScreen from "./screens/detailScreen";
import CreateCharacterScreen from "./screens/ownCharactersScreen/createCharacterScreen/CreateCharacterScreen";
import DetailCharacterScreen from "./screens/ownCharactersScreen/detailCharacterScreen/DetailCharacterScreen";
import OwnCharacter from "./models/OwnCharacter";
import { getData, storeData } from "./store/store.data";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
	let object: Array<OwnCharacter> = [];
	/* getData()
		.then((resul) => console.log(resul))
		.catch();
	storeData(JSON.stringify(object))
		.then((r) => console.log(r))
		.catch();
	getData()
		.then((resul) => console.log(resul))
		.catch(); */
	/* try {
		await AsyncStorage.setItem("@storage_Key", "w");
	} catch (e) {
		// saving error
	} */
	/* let object: Array<OwnCharacter> = [];
	let UID123_object = {
		name: "Chris",
		age: 30,
		traits: { hair: "brown", eyes: "brown" },
	};
	AsyncStorage.setItem("ownCharacters", JSON.stringify(UID123_object)); */
	/* 	const storage = await AsyncStorage.getItem("ownCharacters");
	if (storage === null) {
		AsyncStorage.setItem("ownCharacters", "[]");
	} */

	return (
		<>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="MyTabs"
						component={MyTabs}
						/* options={{ title: "APP" }} */
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{
							title: "Welcome",
							/* headerRight: () => (
								<IconButton
									onPress={() => navigation.navigate("Create_Character")}
									icon="plus"
								/>
							), */
						}}
					/>
					<Stack.Screen
						name="Detail"
						component={DetailsScreen}
						options={{ title: "Detail Character" }}
					/>
					<Stack.Screen
						name="DetailOWnCharacter"
						component={DetailCharacterScreen}
						options={{ title: "Detail Character" }}
					/>
					<Stack.Screen
						name="Create_Character"
						component={CreateCharacterScreen}
						options={{ title: "Create Character" }}
					/>
					<Stack.Screen
						name="Edit_Character"
						component={CreateCharacterScreen}
						options={{ title: "Edit Character" }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default App;
