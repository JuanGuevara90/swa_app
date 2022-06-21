import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
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
					<Card.Cover source={{ uri: characterDetail.image }} />

					<Card.Content>
						<Title>Name</Title>
						<Paragraph>{characterDetail.name}</Paragraph>
						<Title>Gender</Title>
						<Paragraph>{characterDetail.gender}</Paragraph>
						<Title>Status</Title>
						<Paragraph>{characterDetail.status}</Paragraph>
					</Card.Content>
				</Card>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	avatar: {
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

export default DetailScreen;