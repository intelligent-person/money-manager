import { MaterialCommunityIcons } from "@expo/vector-icons";
import {SelectedCategory} from "../../types/types";

export const useIconBackgroundColor = (
  iconName: keyof typeof MaterialCommunityIcons.glyphMap,
  selectedCategory: SelectedCategory,
  color: string,
  name: string | undefined
) => {
  const backgroundColor = name
    ? selectedCategory
      ? selectedCategory === iconName
        ? color
        : "#dedcdc"
      : color
    : selectedCategory === iconName
    ? color
    : "#dedcdc";
  return { backgroundColor };
};
