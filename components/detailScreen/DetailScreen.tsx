import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { CharacterDetail } from "../../models/CharacterDetail";

const DetailScreen = ({ navigation, route }) => {
	const [characterDetail, setcharacterDetail] = useState<CharacterDetail>();

	useEffect(() => {
		const getCharacters = async () => {
			let response = await fetch(
				`https://swapi.dev/api/people/${route.params.id}/`
			);
			let values = await response.json();

			setcharacterDetail(values);
		};
		getCharacters();
	}, []);

	return (
		<View>
			{characterDetail && <Text>Nombre: {characterDetail.name}</Text>}
			{characterDetail && <Text>Hair color: {characterDetail.hair_color}</Text>}
			{characterDetail && <Text>Height: {characterDetail.height}</Text>}
		</View>
	);
};

export default DetailScreen;
