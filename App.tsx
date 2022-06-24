import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import { IconButton } from "react-native-paper";
import HomeScreen from "./screens/homeScreen";
import DetailsScreen from "./screens/detailScreen";

import { MyTabs } from "./components/tabs/MyTabs";
import { RootStackParamList } from "./screens/RootStackParamList";
import CreateCharacterScreen from "./screens/ownCharactersScreen/createCharacterScreen/CreateCharacterScreen";
import DetailCharacterScreen from "./screens/ownCharactersScreen/detailCharacterScreen/DetailCharacterScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
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

					{/* <MyTabs /> */}
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
