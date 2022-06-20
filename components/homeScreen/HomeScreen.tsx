import React, { useEffect } from "react";
import Character from "../../models/Character";
import Item from "../commons";

import {
	View,
	Text,
	TextInput,
	Button,
	FlatList,
	StyleSheet,
} from "react-native";

interface ObjectFlatList {
	id: string;
	title: string;
}

/* type FormatFlatList = ObjectFlatList[]; */

function HomeScreen({ navigation }) {
	const [text, onChangeText] = React.useState("");
	const [characters, setCharacters] = React.useState<ObjectFlatList[]>();
	const [searchCharacters, setSearchCharacters] =
		React.useState<ObjectFlatList[]>();

	useEffect(() => {
		const getCharacters = async () => {
			let response = await fetch("https://swapi.dev/api/people");
			let values = await response.json();
			let arrayCharacters = values.results;
			let formatArray = arrayCharacters.map(
				(character: Character, item: number) => {
					return { id: item, title: character.name };
				}
			);
			setCharacters(formatArray);
			setSearchCharacters(formatArray);
		};
		getCharacters();
	}, []);

	useEffect(() => {
		if (characters && characters?.length > 1) {
			let newArrayCharacters = [];
			if (text != "") {
				newArrayCharacters = characters.filter((character) =>
					character.title.includes(text)
				);
				if (newArrayCharacters.length > 0) {
					setSearchCharacters(newArrayCharacters);
				} else {
					setSearchCharacters([]);
				}
			} else {
				setSearchCharacters(characters);
			}
		}
	}, [text]);

	const renderItem = ({ item }) => {
		return (
			<Item
				item={item}
				onPress={() => navigation.navigate("Detail", { id: item.id + 1 })}
				/* backgroundColor={{ backgroundColor }}
				textColor={{ color }} */
			/>
		);
	};

	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "flex-start",
				padding: 3,
			}}
		>
			<TextInput
				style={styles.input}
				onChangeText={onChangeText}
				placeholder="Search"
				value={text}
			/>
			{searchCharacters?.length === 0 && <Text>No hay resultados</Text>}
			{searchCharacters && (
				<FlatList
					data={searchCharacters}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
					extraData="1"
				/>
			)}
		</View>
	);
}
const styles = StyleSheet.create({
	input: {
		height: 40,
		width: 300,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
	},
});

export default HomeScreen;
