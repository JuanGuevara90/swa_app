import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/stack";
import { Card, Title, Paragraph } from "react-native-paper";
import { RootStackParamList } from "../RootStackParamList";
import { getCharacterDetail } from "../../utilities/getCharacters";
import Character from "../../models/Character";
import { DetailCharacterLoader } from "../../components/loader/Loader";

type Props = NativeStackScreenProps<
	RootStackParamList,
	"Home",
	"Detail",
	"My_Characters",
	"Create_Character",
	"Edit_Character",
	"DetailOWnCharacter"
>;

const DetailScreen = ({ navigation, route }: Props) => {
	const [characterDetail, setcharacterDetail] = useState<Character>();
	const { url, oldCharacter, option } = route.params;

	useEffect(() => {
		if (option === "SHOW") {
			getCharacterDetail(url)
				.then(({ data: { name, species, description, image, status } }) => {
					setcharacterDetail({ name, description, image, species, status });
				})
				.catch();
		} else {
			setcharacterDetail(oldCharacter);
		}
	}, []);

	const clickHandler = () => {
		navigation.navigate("Create_Character", {
			oldCharacter,
			option,
		});
	};

	return (
		<View>
			{!characterDetail && <DetailCharacterLoader />}
			{characterDetail && (
				<Card>
					<Card.Cover source={{ uri: characterDetail.image }} />
					<Card.Content>
						<Title>Name</Title>
						<Paragraph>{characterDetail.name}</Paragraph>
						<Title>Specie</Title>
						<Paragraph>{characterDetail.species}</Paragraph>
						<Title>Status</Title>
						<Paragraph>
							{characterDetail.status ? <Text>Alive</Text> : <Text>Dead</Text>}
						</Paragraph>
						{option === "EDIT" && (
							<>
								<Title>Description</Title>
								<Paragraph>{characterDetail.species}</Paragraph>
								<Button onPress={clickHandler} title="Edit Character" />
							</>
						)}
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
