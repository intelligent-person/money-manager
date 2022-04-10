import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Category, CategoryIconType, SelectedCategory } from "./types";
import * as React from "react";
import {FormikHandlers, FormikValues} from "formik/dist/types";

export interface AllCategoriesProps {
  subCategories: Array<CategoryIconType[] | Category[]>;
  color: string;
  selectedCategory: CategoryIconType;
  setSelectedCategory: (name: CategoryIconType) => void;
}

export interface TypeCreatedCategoryProps {
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    /** Preact-like linkState. Will return a handleChange function.  */ <
      T = string | React.ChangeEvent<any>
    >(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  values: FormikValues;
}

export interface NameCreatedCategoryProps extends TypeCreatedCategoryProps {
  selectedCategory: CategoryIconType;
}

export interface ErrorTextProps {
  text: string
}

export interface CategoryIconProps {
  iconName: CategoryIconType;
  color: string;
  name?: string;
  selectedCategory: SelectedCategory;
  setSelectedCategory: (name: SelectedCategory) => void;
}

export interface NumberButtonProps {
  number: string;
  writeAmount: (number: string) => void;
}

export interface EraseAmountButtonProps {
  eraseAmount: () => void;
}

export interface AddTransactionAmountProps {
  amount: string
}

export interface SubmitButtonProps {
  onSubmit: () => void;
  prevRoute: string;
  disable: boolean;
  type: "amount" | "category";
}
