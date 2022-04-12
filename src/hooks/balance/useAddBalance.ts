import { useMutation } from "react-query";
import { setItem } from "../../../AsyncStorage/AsyncStorage";
import { queryClient } from "../../utils/react-query";
import { UseAddBalance } from "../../types/hooksProps";
import { Balance } from "../../types/types";

export const useAddBalance = () => {
  return useMutation(
    async ({ type, balance }: UseAddBalance) => await setItem(type, balance),
    {
      onSettled(...params) {
        if (params[2].balance) {
          const prevBalance: Balance | undefined = queryClient.getQueryData([
            "balance",
            params[2].type,
          ]);
          queryClient.setQueryData(["balance", params[2].type], {
            ...prevBalance,
            amount: params[2].balance.amount,
          });
        }
      },
    }
  );
};
