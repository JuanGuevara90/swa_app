import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import { IconButton } from "react-native-paper";
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
					options={{
						navigation
						title: "Welcome",
						headerRight: () => (
							<IconButton
								onPress={() => navigation.navigate("Create_Character")}
								icon="plus"
							/>
						),
					}}
				/>
				<Stack.Screen
					name="Detail"
					component={DetailsScreen}
					options={{ title: "Detail Character" }}
				/>
				<Stack.Screen
					name="Create_Character"
					component={DetailsScreen}
					options={{ title: "Create Character" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
