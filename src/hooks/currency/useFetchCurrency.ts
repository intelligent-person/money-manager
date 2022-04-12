import { useQuery } from "react-query";
import { getItem } from "../../../AsyncStorage/AsyncStorage";

export const useFetchCurrency = () => {
  return useQuery(["currency"], async () => {
    return await getItem('currency');
  });
};