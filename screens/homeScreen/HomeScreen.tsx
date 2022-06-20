import React, { useEffect } from "react";
import Character from "../../models/Character";
import Item from "../../components/commons";

import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { Avatar, Card, IconButton, Searchbar } from "react-native-paper";

interface ObjectFlatList {
	id: string;
	title: string;
}

function HomeScreen({ navigation }) {
	const [text, onChangeText] = React.useState("");
	const [characters, setCharacters] = React.useState<Character[]>();
	const [searchCharacters, setSearchCharacters] =
		React.useState<ObjectFlatList[]>();

	useEffect(() => {
		const getCharacters = async () => {
			let response = await fetch("https://swapi.dev/api/people");
			let values = await response.json();
			let arrayCharacters = values.results;
			setCharacters(arrayCharacters);
			let formatArray = arrayCharacters.map(
				(character: Character, item: number) => {
					return { id: item, title: character.name };
				}
			);
			setSearchCharacters(formatArray);
		};
		getCharacters();
		return;
	}, []);

	useEffect(() => {
		if (characters && characters?.length > 1) {
			let newArrayCharacters = [];
			if (text != "") {
				newArrayCharacters = characters
					.filter((character) => character.name.includes(text))
					.map((value, item) => {
						return { id: String(item), title: value.name };
					});
				if (newArrayCharacters.length === 0) {
					setSearchCharacters([]);
				}
				setSearchCharacters(newArrayCharacters);
				return;
			}
			let formatArray = characters.map((character: Character, item: number) => {
				return { id: String(item), title: character.name };
			});
			setSearchCharacters(formatArray);
			return;
		}
	}, [text]);

	const renderItem = ({ item }) => {
		const selectCharacter = characters?.filter(
			(value) => value.name === item.title
		);
		return (
			<>
				{selectCharacter && (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("Detail", {
								url: selectCharacter[0].url,
							})
						}
					>
						<Card.Title
							title={item.title}
							subtitle="Card Subtitle"
							left={(props) => <Avatar.Icon {...props} icon="folder" />}
							right={(props) => <IconButton {...props} icon="information" />}
						/>
					</TouchableOpacity>
				)}
			</>
		);
	};

	return (
		<View>
			{/* <TextInput
				style={styles.input}
				onChangeText={onChangeText}
				placeholder="Search"
				value={text}

			/> */}
			{/* <TextInput
				placeholder="Search"
				onChangeText={onChangeText}
				style={styles.input}
			/> */}
			<Searchbar
				placeholder="Search"
				onChangeText={onChangeText}
				value={text}
				style={styles.input}
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
		margin: 12,
		borderWidth: 2,
		padding: 10,
		borderRadius: 5,
	},
	title: {
		fontSize: 40,
	},
});

export default HomeScreen;
