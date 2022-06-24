import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/homeScreen/HomeScreen";
import OwnCharactersScreen from "../../screens/ownCharactersScreen/OwnCharactersScreen";
import { RootStackParamList } from "../../screens/RootStackParamList";

const Tab = createBottomTabNavigator<RootStackParamList>();

export const MyTabs = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{ title: "Series Characters" }}
			/>
			<Tab.Screen
				name="My_Characters"
				component={OwnCharactersScreen}
				options={{ title: "Own Characters" }}
			/>
		</Tab.Navigator>
	);
};
