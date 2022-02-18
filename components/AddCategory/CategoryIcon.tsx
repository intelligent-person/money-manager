import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  color: string;
  selectedCategory: keyof typeof MaterialCommunityIcons.glyphMap;
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  setSelectedCategory: (
    name: keyof typeof MaterialCommunityIcons.glyphMap
  ) => void;
};

const CategoryIcon: React.FC<Props> = ({
  color,
  name,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <View style={styles.category}>
      <TouchableHighlight
        underlayColor={color}
        style={[
          styles.button,
          {
            backgroundColor: selectedCategory === name ? color : "#dedcdc",
          },
        ]}
        onPress={() => setSelectedCategory(name)}
      >
        <MaterialCommunityIcons name={name} size={40} color={"white"} />
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    shadowColor: "black",

    borderRadius: 50,
    elevation: 5,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  category: {
    alignItems: "center",
    width: 100,
    marginBottom: 10,
  },
});

export default React.memo(CategoryIcon);
