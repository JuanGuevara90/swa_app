import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/homeScreen";
import DetailsScreen from "./screens/detailScreen";
import { RootStackParamList } from "./screens/RootStackPrams";

const Stack = createNativeStackNavigator<RootStackParamList>();

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
