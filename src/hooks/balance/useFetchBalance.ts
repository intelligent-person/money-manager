import { useQuery } from "react-query";
import { getItem } from "../../../AsyncStorage/AsyncStorage";

export const useFetchBalance = (type: "Expenses" | "Income") => {
  return useQuery(["balance", type], async () => {
    return await getItem(type);
  });
};
