import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Tabs } from "./components/tabs/Tabs";
import { RootStackParamList } from "./utilities/RootStackParamList";

import Detail from "./screens/detail";
import CreateCharacter from "./screens/ownCharacter/createCharacter";

import { getData, storeData } from "./store/storeData";
import Character from "./models/Character";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
	getData()
		.then((response) => {
			if (!response) {
				let object: Array<Character> = [];
				storeData(object);
			}
		})
		.catch();
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Tabs"
					component={Tabs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Detail"
					component={Detail}
					options={{ title: "Detail Character" }}
				/>
				<Stack.Screen
					name="Create_Character"
					component={CreateCharacter}
					options={({ route }) => ({ title: route.params.name })}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
