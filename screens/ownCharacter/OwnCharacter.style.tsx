import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 2,
		padding: 10,
		borderRadius: 5,
	},
	touchableOpacityStyle: {
		position: "absolute",
		width: 50,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		right: 30,
		bottom: 30,
	},
	floatingButtonStyle: {
		resizeMode: "contain",
		width: 50,
		height: 50,
		//backgroundColor:'black'
	},
	label: {
		marginLeft: 40,
		marginTop: 10,
	},
});

export default styles;
