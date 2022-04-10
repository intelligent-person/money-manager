
export const useFlexCategories = (categories: any, size: number) => {
  let subCategories = [];
  for (let i = 0; i < Math.ceil(categories.length / size); i++) {
    subCategories[i] = categories.slice(i * size, i * size + size);
  }

  if(size === 9) return {subCategories, size}

  if (categories.length % size === 0) subCategories[subCategories.length] = [];

  return { size, subCategories };
};
