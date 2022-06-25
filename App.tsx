import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MyTabs } from "./components/tabs/MyTabs";
import { RootStackParamList } from "./screens/RootStackParamList";

import HomeScreen from "./screens/homeScreen";
import DetailsScreen from "./screens/detailScreen";
import CreateCharacterScreen from "./screens/ownCharactersScreen/createCharacterScreen/CreateCharacterScreen";

import { getData, storeData } from "./store/storeData";
import Character from "./models/Character";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
	/* AsyncStorage.removeItem("@store_app"); */
	getData()
		.then((resul) => {
			if (!resul) {
				let object: Array<Character> = [];
				storeData(object);
			}
		})
		.catch();

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
