import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../../utilities/RootStackParamList";
import Character from "../../screens/character";
import OwnCharacter from "../../screens/ownCharacter";

const Tab = createBottomTabNavigator<RootStackParamList>();

export const Tabs = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="APICharacter"
				component={Character}
				options={{ title: "Series Characters" }}
			/>
			<Tab.Screen
				name="OwnCharacter"
				component={OwnCharacter}
				options={{ title: "Own Characters" }}
			/>
		</Tab.Navigator>
	);
};
