import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CategoryIcon from "./CategoryIcon";

type Props = {
  categories: Array<keyof typeof MaterialCommunityIcons.glyphMap>;
  color: string;
  selectedCategory: keyof typeof MaterialCommunityIcons.glyphMap;
  setSelectedCategory: (
    name: keyof typeof MaterialCommunityIcons.glyphMap
  ) => void;
};
const CategoriesPage: React.FC<Props> = ({
  categories,
  color,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <View style={styles.rowWrapper}>
      {categories.map((name) => (
        <CategoryIcon
          color={color}
          selectedCategory={selectedCategory}
          name={name}
          setSelectedCategory={setSelectedCategory}
          key={name}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  rowWrapper: {
    flex: 1,
    paddingHorizontal: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
});

export default React.memo(CategoriesPage);
