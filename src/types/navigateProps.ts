import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

export type AddCategoryNavigateProps = NativeStackScreenProps<
  RootStackParamList,
  "AddCategory"
>;

export type AddTransactionNavigateProps = NativeStackScreenProps<
  RootStackParamList,
  "AddTransaction"
>;

export type BottomNavigateProps = NativeStackScreenProps<
  RootStackParamList,
  "Income" | "Expenses"
>;

