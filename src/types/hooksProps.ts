import {Balance, Category} from "./types";


export interface UseAddBalance {
  type: string
  balance: Balance
}
export interface UseAddCategory {
  key: string
  newCategory: Category[]
}

export interface UseAddCurrency {
  key: string
  currency: string
}