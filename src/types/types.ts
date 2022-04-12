import { MaterialCommunityIcons } from "@expo/vector-icons";

export type CategoryIconType = keyof typeof MaterialCommunityIcons.glyphMap

export interface Balance {
  amount: number,
  date: number,
  currency: string,
  title: string,
}

export interface Category {
  iconName: CategoryIconType;
  color: string;
  name: string;
};

export type RootStackParamList = {
  Income: undefined;
  Expenses: undefined;
  AddTransaction: undefined;
  AddCategory: undefined;
  SetColor: undefined;
};

export type SelectedCategory = keyof typeof MaterialCommunityIcons.glyphMap | string | null