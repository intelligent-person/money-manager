import React, { useMemo } from "react";
import { css } from "@emotion/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableHighlight } from "../styles/touchable";
import { useIconBackgroundColor } from "../hooks/custom/useIconBackgroundColor";
import { CategoryIconProps } from "../types/componentsProps";
import { StyleSheet, View, Text } from "react-native";
import {normalize} from "../utils/normalizeSize";

const CategoryIcon: React.FC<CategoryIconProps> = ({
  name,
  color,
  iconName,
  selectedCategory,
  setSelectedCategory,
}) => {
  const { backgroundColor } = useMemo(
    () => useIconBackgroundColor(iconName, selectedCategory, color, name),
    [iconName, selectedCategory, color, name]
  );

  const selectCategory = () => {
    setSelectedCategory(
      name ? (selectedCategory === iconName ? null : iconName) : iconName
    );
  };

  return (
    <View style={styles.category}>
      <TouchableHighlight
        category
        disabled={!name && selectedCategory === iconName}
        underlayColor={color}
        style={css`
          background-color: ${backgroundColor};
        `}
        onPress={selectCategory}
      >
        <MaterialCommunityIcons name={iconName} size={normalize(40)} color="white" />
      </TouchableHighlight>
      {name && (
        <Text style={styles.categoryName}>
          {name.length > 13 ? name.slice(0, 11) + "..." : name}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    alignItems: "center",
    width: 100,
    marginBottom: 10,
  },
  categoryName: {
    color: "grey",
  },
});

export default CategoryIcon;
