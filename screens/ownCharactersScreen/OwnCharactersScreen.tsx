import React, { useEffect, useState } from "react";
import {
	Text,
	FlatList,
	TouchableOpacity,
	ListRenderItemInfo,
	Image,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/stack";
import { Searchbar, Card, Avatar, IconButton } from "react-native-paper";
import OwnCharacter from "../../models/OwnCharacter";
import styles from "./OwnCharactersScreen.style";
import { RootStackParamList } from "../RootStackParamList";
import { OPTIONS } from "../../utilities/characterOptions";
import { AsyncStorage } from "react-native";

import {
	pipeCharacters,
	pipeOwnCharacters,
} from "../../utilities/pipeCharacters";

type Props = NativeStackScreenProps<
	RootStackParamList,
	"Home",
	"Detail",
	"Create_Character",
	"Edit_Character",
	"DetailOWnCharacter"
>;

const OwnCharactersScreen = ({ navigation, route }: Props) => {
	const [text, onChangeText] = useState("");
	/* let dataStrore = await AsyncStorage.getItem("ownCharacters");
	console.log(dataStrore); */
	/* let valueStore = [];
	if (dataStrore != null) {
		valueStore = JSON.parse(dataStrore);
	} */
	const [ownCharacters, setOwnCharacteres] = useState<OwnCharacter[]>([]);

	useEffect(() => {
		if (route.params) {
			const { data, option, oldCharacter } = route.params;

			if (option === "CREATE") {
				setOwnCharacteres((prev) => [
					...prev,
					{
						name: data.name,
						species: data.species,
					},
				]);
			} else {
				if (option === "EDIT") {
					let editCharacterArray = ownCharacters.map((item) => {
						if (item.name === oldCharacter.name) {
							console.log("igual");
							return { ...data };
						}
						return item;
					});
					setOwnCharacteres([...editCharacterArray]);
				}
			}
			/* AsyncStorage.setItem("ownCharacters", JSON.stringify(ownCharacters)); */
		}
	}, [route.params]);
	const renderItem = ({
		item: { name, species, image },
	}: ListRenderItemInfo<OwnCharacter>) => {
		return (
			<>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate("Detail", {
							oldCharacter: { name, species, image },
							option: OPTIONS.EDIT,
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
								onPress={() => clickHandler(name)}
							/>
						)}
					/>
				</TouchableOpacity>
			</>
		);
	};
	const clickHandler = (op = "") => {
		// Enviar a la pagina de detalle
		if (op === "") {
			navigation.navigate("Create_Character", {
				oldCharacter: { name: "", species: "", image: "" },
				option: OPTIONS.CREATE,
			});
			return;
		}

		const arrayDeleteCharacter = ownCharacters.filter(
			(item) => item.name != op
		);
		setOwnCharacteres([...arrayDeleteCharacter]);
	};
	return (
		<>
			<Searchbar
				placeholder="Search"
				onChangeText={onChangeText}
				value={text}
				style={styles.input}
			/>
			{/* <ActivityIndicator size="large" /> */}

			<FlatList<OwnCharacter>
				ListEmptyComponent={() => <Text>No hay resultados</Text>}
				data={pipeOwnCharacters(ownCharacters, text)}
				renderItem={renderItem}
				keyExtractor={(item) => `own_${String(item.name)}`}
			/>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => clickHandler("")}
				style={styles.touchableOpacityStyle}
			>
				<Image
					// FAB using TouchableOpacity with an image
					// For online image
					source={{
						uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png",
					}}
					// For local image
					//source={require('./images/float-add-icon.png')}
					style={styles.floatingButtonStyle}
				/>
			</TouchableOpacity>
		</>
	);
};

export default OwnCharactersScreen;
