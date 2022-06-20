import React from "react";
import {
	Text,
	TouchableOpacity,
	StyleSheet,
	GestureResponderEvent,
} from "react-native";

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
			<Text style={[styles.title]}>{item.title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	item: {
		borderRadius: 1,
		borderColor: blue,
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
});

export default Item;
