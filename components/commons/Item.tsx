import React from "react";
import {
	Text,
	TouchableOpacity,
	StyleSheet,
	GestureResponderEvent,
} from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";
interface ObjectFlatList {
	id: string;
	title: string;
}

interface PropsItem {
	item: ObjectFlatList;
	onPress?: (event: GestureResponderEvent) => void;
}

const Item = ({ item, onPress }: PropsItem) => {
	return (
		<TouchableOpacity onPress={onPress} style={[styles.item]}>
			<Card.Title
				title={item.title}
				style={styles.title}
				subtitle="Card Subtitle"
				left={(props) => <Avatar.Icon {...props} icon="folder" />}
				right={(props) => <IconButton {...props} icon="folder" />}
			/>
			<Text style={styles.title}>{item.title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	item: {
		borderRadius: 1,
		borderColor: "blue",
		borderWidth: 3,
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
});

export default Item;
