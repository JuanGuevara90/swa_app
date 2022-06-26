import React, { useState } from "react";
import { Text, View, TextInput, Button, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/stack";
import { useForm, Controller } from "react-hook-form";
import { Switch } from "react-native-paper";
import { RootStackParamList } from "../../../utilities/RootStackParamList";
import CharacterModel from "../../../models/Character";
import styles from "./CreateCharacter.style";

type Props = NativeStackScreenProps<
	RootStackParamList,
	"APICharacter",
	"Detail",
	"OwnCharacter",
	"Create_Character"
>;

export default function CreateCharacter({ navigation, route }: Props) {
	const { oldCharacter, action } = route.params;
	const { name, species, image, description, status } = oldCharacter;
	const [isSwitchOn, setIsSwitchOn] = useState<boolean>(status);
	const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name,
			species,
			image,
			description,
			status: isSwitchOn,
		},
	});
	const onSubmit = (newCharacter: CharacterModel) =>
		navigation.navigate("OwnCharacter", {
			newCharacter,
			oldCharacter,
			action,
		});

	return (
		<View>
			<ScrollView>
				<Text style={styles.label}>Name</Text>
				<Controller
					control={control}
					rules={{
						required: true,
						pattern:
							/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/i,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="name"
				/>
				{errors.name && errors.name.type === "required" && (
					<Text style={styles.label_error}>This is required.</Text>
				)}
				{errors.name && errors.name.type === "pattern" && (
					<Text style={styles.label_error}>Input Only letters</Text>
				)}
				<Text style={styles.label}>Species</Text>
				<Controller
					control={control}
					rules={{
						required: true,
						pattern: /[a-zA-Z!@#$%¨&*()-=+/*.{}]/i,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="species"
				/>
				{errors.species && errors.species.type === "required" && (
					<Text style={styles.label_error}>This is required.</Text>
				)}
				{errors.species && errors.species.type === "pattern" && (
					<Text style={styles.label_error}>
						Input Only letters and special characters
					</Text>
				)}
				<Text style={styles.label}>Image</Text>
				<Controller
					control={control}
					rules={{
						required: true,
						pattern:
							/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="image"
				/>
				{errors.image && errors.image.type === "required" && (
					<Text style={styles.label_error}>This is required.</Text>
				)}
				{errors.image && errors.image.type === "pattern" && (
					<Text style={styles.label_error}>Incorrect URL</Text>
				)}
				<Text style={styles.label}>Description</Text>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="description"
				/>
				{errors.description && (
					<Text style={styles.label_error}>This is required.</Text>
				)}

				<Text style={styles.label}>
					Status: {isSwitchOn ? "Alive" : "Dead"}
				</Text>
				<Controller
					control={control}
					rules={{
						maxLength: 100,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<Switch
							style={styles.switch}
							value={value}
							onValueChange={(e) => {
								onChange(e);
								onToggleSwitch();
							}}
						/>
					)}
					name="status"
				/>
				<Button title="Save" onPress={handleSubmit(onSubmit)} />
			</ScrollView>
		</View>
	);
}
