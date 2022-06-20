import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { CharacterDetail } from "../../models/CharacterDetail";
import { Card, Avatar, IconButton, Title, Paragraph } from "react-native-paper";

const DetailScreen = ({ route }) => {
	const [characterDetail, setcharacterDetail] = useState<CharacterDetail>();

	useEffect(() => {
		const getCharacters = async () => {
			let response = await fetch(route.params.url);
			let values = await response.json();
			setcharacterDetail(values);
		};
		getCharacters();
	}, []);

	return (
		<View>
			{characterDetail && (
				<Card>
					<Card.Cover source={{ uri: "https://picsum.photos/700" }} />
					<Card.Content>
						<Title>Name</Title>
						<Paragraph>{characterDetail.name}</Paragraph>
						<Title>Hair color</Title>
						<Paragraph>{characterDetail.hair_color}</Paragraph>
						<Title>Height</Title>
						<Paragraph>{characterDetail.height}</Paragraph>
					</Card.Content>
				</Card>
			)}
		</View>
	);
};

export default DetailScreen;
