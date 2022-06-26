import React, { useEffect, useState } from "react";
import { View, Button, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/stack";
import { Card, Title, Paragraph } from "react-native-paper";
import { RootStackParamList } from "../../utilities/RootStackParamList";
import { getCharacterDetail } from "../../utilities/getCharacters";
import CharacterModel from "../../models/Character";
import { DetailCharacterLoader } from "../../components/loader/Loader";

type Props = NativeStackScreenProps<
	RootStackParamList,
	"APICharacter",
	"Detail",
	"OwnCharacter",
	"Create_Character",
	"DetailOWnCharacter"
>;

const DetailScreen = ({ navigation, route }: Props) => {
	const [character, setCharacter] = useState<CharacterModel>();
	const { url, oldCharacter, action } = route.params;

	useEffect(() => {
		if (action === "SHOW") {
			getCharacterDetail(url)
				.then(({ data: { name, species, description, image, status } }) => {
					setCharacter({ name, description, image, species, status });
				})
				.catch();
		} else {
			setCharacter(oldCharacter);
		}
	}, []);

	const clickHandler = () => {
		navigation.navigate("Create_Character", {
			oldCharacter,
			action,
			name: "Edit Character",
		});
	};

	return (
		<View>
			{!character && <DetailCharacterLoader />}
			{character && (
				<Card>
					<Card.Cover source={{ uri: character.image }} />
					<Card.Content>
						<Title>Name</Title>
						<Paragraph>{character.name}</Paragraph>
						<Title>Specie</Title>
						<Paragraph>{character.species}</Paragraph>
						<Title>Status</Title>
						<Paragraph>
							{character.status ? <Text>Alive</Text> : <Text>Dead</Text>}
						</Paragraph>
						{action === "EDIT" && (
							<>
								<Title>Description</Title>
								<Paragraph>{character.species}</Paragraph>
								<Button onPress={clickHandler} title="Edit Character" />
							</>
						)}
					</Card.Content>
				</Card>
			)}
		</View>
	);
};

export default DetailScreen;
