import { useMutation } from "react-query";
import {setItem} from "../../../AsyncStorage/AsyncStorage";
import { queryClient } from "../../utils/react-query";
import {UseAddCurrency} from "../../types/hooksProps";


export const useAddCurrency = () => {
  return useMutation(async ({key, currency}: UseAddCurrency) => await setItem(key, currency), {
    onSettled(...params) {
      if(params[2].currency) {
        queryClient.setQueryData(["currency"], params[2].currency);
      }
    },
  });
};