import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/homeScreen";
import { View, Text, Button } from "react-native";
import DetailsScreen from "./components/detailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
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
			</Stack.Navigator>
		</NavigationContainer>
	);
}
