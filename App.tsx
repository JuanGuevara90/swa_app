import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/homeScreen";
import { View, Text, Button } from "react-native";
import DetailsScreen from "./components/detailScreen";
import TestScreen from "./components/testScreen";
const Stack = createNativeStackNavigator();

export default function App() {
	/*   useEffect(()=>{

    const getChapters = async fetch('https://swapi.dev/api/people');
    const response = await getChapters.response;
    console.log(response);
  },[]); */

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: "Welcome" }}
				/>

				<Stack.Screen
					name="Detail"
					component={DetailsScreen}
					options={{ title: "Detail Character" }}
				/>

				<Stack.Screen
					name="Test"
					component={TestScreen}
					options={{ title: "Test Character" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
