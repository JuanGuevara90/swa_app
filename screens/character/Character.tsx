import React, { useEffect, useState } from "react";
import { Text, FlatList, ListRenderItemInfo, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/stack";
import { Searchbar } from "react-native-paper";

import CharacterModel from "../../models/Character";
import { getCharacters } from "../../utilities/getCharacters";
import { RootStackParamList } from "../../utilities/RootStackParamList";
import { ACTION } from "../../utilities/characterActions";
import { pipeCharacters } from "../../utilities/pipeCharacters";


import { CharacterLoader } from "../../components/loader/Loader";
import Item from "../../components/commons/item";
import styles from "./Character.style";

interface Pagination {
	current: number;
	totalPages: number;
}

type Props = NativeStackScreenProps<
	RootStackParamList,
	"APICharacter",
	"Detail",
	"OwnCharacter",
	"Create_Character",
	"DetailOWnCharacter"
>;

function Character({ navigation }: Props) {
	const [text, onChangeText] = useState("");
	const [characters, setCharacters] = useState<CharacterModel[]>([]);
	const [page, setPage] = useState<Pagination>({
		current: 1,
		totalPages: 0,
	});

	const { current, totalPages } = page;

	useEffect(() => {
		getCharacters(current)
			.then(
				({
					data: {
						results,
						info: { pages },
					},
				}) => {
					const isFirstPage = current === 1;
					setCharacters((prevCharacters) =>
						isFirstPage ? results : [...prevCharacters, ...results]
					);
					isFirstPage &&
						setPage((prevState) => ({ ...prevState, totalPages: pages }));
				}
			)
			.catch();
	}, [current]);

	const renderItem = ({ item }: ListRenderItemInfo<CharacterModel>) => {
		return (
			<Item
				item={item}
				action={ACTION.SHOW}
				navigation={navigation}
				handleClickOnButton={console.log}
			/>
		);
	};

	const handleFetchData = () => {
		if (characters.length > 0 && current < totalPages) {
			setPage((prevState) => ({
				...prevState,
				current: prevState.current + 1,
			}));
		}
	};

	return (
		<View>
			<Searchbar
				placeholder="Search"
				onChangeText={onChangeText}
				value={text}
				style={styles.input}
			/>
			{characters.length === 0 && <CharacterLoader />}
			<FlatList<CharacterModel>
				ListEmptyComponent={() => <Text>No results found.</Text>}
				data={pipeCharacters(characters, text)}
				renderItem={renderItem}
				keyExtractor={(item) => `${page.current}_${String(item.id)}`}
				onEndReachedThreshold={0.1}
				onEndReached={handleFetchData}
			/>
		</View>
	);
}

export default Character;
