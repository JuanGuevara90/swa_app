import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import styles from "./CreateCharacterScreen.style";
import { RootStackParamList } from "../../RootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/stack";

type Props = NativeStackScreenProps<
	RootStackParamList,
	"Home",
	"Detail",
	"My_Characters",
	"Create_Character"
>;
export default function CreateCharacterScreen({ navigation, route }: Props) {
	const { oldCharacter, option } = route.params;
	const { name, species, image, description } = oldCharacter;

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
		},
	});
	const onSubmit = (data) =>
		navigation.navigate("My_Characters", {
			data,
			oldCharacter,
			option,
		});

	return (
		<View>
			<Text style={styles.label}>Name</Text>
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
				name="name"
			/>
			{errors.name && <Text>This is required.</Text>}
			<Text style={styles.label}>Species</Text>
			<Controller
				control={control}
				rules={{
					maxLength: 100,
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
			{errors.species && <Text>This is required.</Text>}
			<Text style={styles.label}>Image</Text>
			<Controller
				control={control}
				rules={{
					maxLength: 100,
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
			{errors.image && <Text>This is required.</Text>}
			<Text style={styles.label}>Description</Text>
			<Controller
				control={control}
				rules={{
					maxLength: 100,
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
			{errors.description && <Text>This is required.</Text>}
			<Button title="Save" onPress={handleSubmit(onSubmit)} />
		</View>
	);
}
