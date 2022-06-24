import React, { useEffect, useState } from "react";
import Character from "../../models/Character";
import { getCharacters } from "../../utilities/getCharacters";
import { NativeStackScreenProps } from "@react-navigation/stack";
import {
	Text,
	FlatList,
	TouchableOpacity,
	ActivityIndicator,
	ListRenderItemInfo,
} from "react-native";
import { Avatar, Card, IconButton, Searchbar } from "react-native-paper";
import { pipeCharacters } from "../../utilities/pipeCharacters";

import styles from "./HomeScreen.style";
import { RootStackParamList } from "../RootStackParamList";

interface Pagination {
	current: number;
	totalPages: number;
}

type Props = NativeStackScreenProps<
	RootStackParamList,
	"Home",
	"Detail",
	"Create_Character"
>;

function HomeScreen({ navigation }: Props) {
	const [text, onChangeText] = useState("");
	const [characters, setCharacters] = useState<Character[]>([]);
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

	const renderItem = ({
		item: { name, url, species, image },
	}: ListRenderItemInfo<Character>) => {
		return (
			<>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate("Detail", {
							url,
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
						right={(props) => <IconButton {...props} icon="arrow-right" />}
					/>
				</TouchableOpacity>
			</>
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
		<>
			<Searchbar
				placeholder="Search"
				onChangeText={onChangeText}
				value={text}
				style={styles.input}
			/>
			{/* <ActivityIndicator size="large" /> */}
			<FlatList<Character>
				ListEmptyComponent={() => <Text>No hay resultados</Text>}
				data={pipeCharacters(characters, text)}
				renderItem={renderItem}
				keyExtractor={(item) => `${page.current}_${String(item.id)}`}
				onEndReachedThreshold={0.1}
				onEndReached={handleFetchData}
			/>
		</>
	);
}

export default HomeScreen;
