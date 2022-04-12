import { useMutation } from "react-query";
import {setItem} from "../../../AsyncStorage/AsyncStorage";
import { queryClient } from "../../utils/react-query";
import {useFlexCategories} from "../custom/useFlexCategories";
import {UseAddCategory} from "../../types/hooksProps";

export const useAddCategory = () => {
  return useMutation(async ({key, newCategory}: UseAddCategory) => await setItem(key, newCategory), {
    onSettled(...params) {
      if(params[2].newCategory) {
        const {subCategories} = useFlexCategories(params[2].newCategory, 6)
        queryClient.setQueryData(["categories", params[2].key], subCategories);
      }
    },
  });
};