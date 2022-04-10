import {Category, CategoryIconType} from "../types/types";

export const useFlexCategories = (categories: Array<Category> | Array<CategoryIconType>, size: number) => {
  let subCategories = [];
  for (let i = 0; i < Math.ceil(categories.length / size); i++) {
    subCategories[i] = categories.slice(i * size, i * size + size);
  }

  if(size === 9) return {subCategories}

  if (categories.length % size === 0) subCategories[subCategories.length] = [];

  return { size, subCategories };
};
