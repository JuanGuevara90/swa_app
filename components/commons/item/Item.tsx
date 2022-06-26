import React from "react";
import {
	Text,
	TouchableOpacity,
	StyleSheet,
	GestureResponderEvent,
} from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../utilities/RootStackParamList";
import Character from "../../../models/Character";

type Roots = NativeStackScreenProps<
	RootStackParamList,
	"APICharacter",
	"Detail",
	"OwnCharacter",
	"Create_Character",
	"DetailOWnCharacter"
>;

interface PropsItem {
	item: Character;
	navigation: Roots;
	action: string;
	handleClickOnButton: (name: string) => void;
}

const Item = ({ item, action, navigation, handleClickOnButton }: PropsItem) => {
	const { name = "", species, image, url } = item;

	return (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate("Detail", {
					url,
					oldCharacter: item,
					action,
				})
			}
		>
			<Card.Title
				title={name}
				subtitle={species}
				left={(props) => (
					<Avatar.Image
						size={50}
						source={{
							uri: image,
						}}
					/>
				)}
				right={(props) => (
					<IconButton
						{...props}
						icon="eraser"
						onPress={() => handleClickOnButton(name)}
					/>
				)}
			/>
		</TouchableOpacity>
	);
};

export default Item;
