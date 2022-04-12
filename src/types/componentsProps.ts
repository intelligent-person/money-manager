import { Category, CategoryIconType, SelectedCategory } from "./types";
import * as React from "react";
import {FormikValues} from "formik/dist/types";
import {AddTransactionNavigateProps, BottomNavigateProps} from "./navigateProps";
import { Dispatch, SetStateAction } from "react";

export interface UserCategoriesProps extends AddTransactionNavigateProps {
  categories: Array<Category[]>
  size: number
  selectedCategory: SelectedCategory
  setSelectedCategory: Dispatch<SetStateAction<SelectedCategory>>
}

export interface TitleTransactionProps {
  setTitle: Dispatch<SetStateAction<string>>
}

export interface AddTransactionFieldProps {
  prevRoute: 'expenses' | 'income'
  selectedCategory: SelectedCategory
  title: string
}

export interface AddTransactionProps extends AddTransactionNavigateProps{
  categories: Array<Category[]>
  size: number
  prevRoute: string
}

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
  userCurrency: string
  setUserCurrency: Dispatch<SetStateAction<string>>
}

export interface SubmitButtonProps {
  onSubmit: () => void;
  prevRoute: string;
  disable: boolean;
  type: "amount" | "category";
}

export interface NavigateButtonProps extends BottomNavigateProps {
  type: "Income" | "Expenses"
}
