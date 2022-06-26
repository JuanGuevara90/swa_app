import React from "react";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";

export const CharacterLoader = () => (
	<ContentLoader
		speed={1}
		width={400}
		height={150}
		viewBox="0 0 400 150"
		backgroundColor="#f3f3f3"
		foregroundColor="#3e3d3d"
	>
		<Circle cx="37" cy="27" r="20" />
		<Circle cx="39" cy="77" r="20" />
		<Circle cx="40" cy="128" r="20" />
		<Rect x="76" y="12" rx="0" ry="0" width="230" height="13" />
		<Rect x="77" y="29" rx="0" ry="0" width="230" height="13" />
		<Rect x="78" y="60" rx="0" ry="0" width="230" height="13" />
		<Rect x="79" y="77" rx="0" ry="0" width="230" height="13" />
		<Rect x="80" y="110" rx="0" ry="0" width="230" height="13" />
		<Rect x="81" y="127" rx="0" ry="0" width="230" height="13" />
	</ContentLoader>
);

export const DetailCharacterLoader = (props) => (
	<ContentLoader
		speed={1}
		width={476}
		height={300}
		viewBox="0 0 476 300"
		backgroundColor="#f3f3f3"
		foregroundColor="#3e3d3d"
		{...props}
	>
		<Rect x="52" y="185" rx="0" ry="0" width="110" height="13" />
		<Rect x="52" y="162" rx="0" ry="0" width="77" height="12" />
		<Rect x="52" y="233" rx="0" ry="0" width="110" height="13" />
		<Rect x="52" y="210" rx="0" ry="0" width="77" height="12" />
		<Rect x="53" y="286" rx="0" ry="0" width="110" height="13" />
		<Rect x="53" y="263" rx="0" ry="0" width="77" height="12" />
		<Rect x="37" y="-13" rx="0" ry="0" width="375" height="161" />
	</ContentLoader>
);
