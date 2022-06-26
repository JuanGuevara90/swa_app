import React, { useEffect, useState } from "react";
import {
	Text,
	FlatList,
	TouchableOpacity,
	ListRenderItemInfo,
	Image,
} from "react-native";

import { NativeStackScreenProps } from "@react-navigation/stack";
import { Searchbar } from "react-native-paper";
import { RootStackParamList } from "../../utilities/RootStackParamList";
import { ACTION } from "../../utilities/characterActions";
import { pipeCharacters } from "../../utilities/pipeCharacters";
import { getData, storeData } from "../../store/storeData";
import CharacterModel from "../../models/Character";
import Item from "../../components/commons/item/Item";
import styles from "./OwnCharacter.style";

type Props = NativeStackScreenProps<
	RootStackParamList,
	"APICharacter",
	"Detail",
	"OwnCharacter",
	"Create_Character",
	"DetailOWnCharacter"
>;

const OwnCharactersScreen = ({ navigation, route }: Props) => {
	const [text, onChangeText] = useState("");
	let dataInitial: Array<CharacterModel> = [];

	const [ownCharacters, setOwnCharacters] =
		useState<CharacterModel[]>(dataInitial);

	useEffect(() => {
		getData()
			.then((response) => {
				setOwnCharacters(response);
			})
			.catch((error) => []);
	}, []);

	useEffect(() => {
		storeData(ownCharacters);
	}, [ownCharacters]);

	useEffect(() => {
		if (route.params) {
			const { newCharacter, action, oldCharacter } = route.params;
			if (action === "CREATE") {
				setOwnCharacters((prev) => [
					...prev,
					{
						name: newCharacter.name,
						species: newCharacter.species,
						description: newCharacter.description,
						status: newCharacter.status,
						image: newCharacter.image,
					},
				]);
			} else {
				if (action === "EDIT") {
					let editCharacterArray = ownCharacters.map((item) => {
						if (item.name === oldCharacter.name) {
							return newCharacter;
						}
						return item;
					});
					setOwnCharacters([...editCharacterArray]);
				}
			}
		}
	}, [route.params]);

	const renderItem = ({ item }: ListRenderItemInfo<CharacterModel>) => {
		return (
			<Item
				item={item}
				action={ACTION.EDIT}
				navigation={navigation}
				handleClickOnButton={handleClickOnButton}
			/>
		);
	};

	const handleClickOnButton = (action = "") => {
		if (action === "") {
			navigation.navigate("Create_Character", {
				name: "Create Character",
				oldCharacter: {
					name: "",
					image: "",
					description: "",
					species: "",
					status: true,
				},
				action: ACTION.CREATE,
			});
			return;
		}
		const arrayDeleteCharacter = ownCharacters.filter(
			(item) => item.name != action
		);
		setOwnCharacters([...arrayDeleteCharacter]);
		storeData([...arrayDeleteCharacter]);
	};

	return (
		<>
			<Searchbar
				placeholder="Search"
				onChangeText={onChangeText}
				value={text}
				style={styles.input}
			/>
			<FlatList<CharacterModel>
				ListEmptyComponent={() => (
					<Text style={styles.label}>No results found.</Text>
				)}
				data={pipeCharacters(ownCharacters, text)}
				renderItem={renderItem}
				keyExtractor={(item) => `own_${String(item.name)}`}
			/>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => handleClickOnButton("")}
				style={styles.touchableOpacityStyle}
			>
				<Image
					source={{
						uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png",
					}}
					style={styles.floatingButtonStyle}
				/>
			</TouchableOpacity>
		</>
	);
};

export default OwnCharactersScreen;
