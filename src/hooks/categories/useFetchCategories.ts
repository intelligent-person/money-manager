import { useQuery } from "react-query";
import { getItem } from "../../../AsyncStorage/AsyncStorage";
import {useFlexCategories} from "../custom/useFlexCategories";

export const useFetchCategories = (type: string, size: number) => {
  return useQuery(["categories", type], async () => {
    const data = await getItem(type);
    if(data) {
      const {subCategories} = useFlexCategories(data, size)
      return subCategories;
    }
    return [];
  });
};