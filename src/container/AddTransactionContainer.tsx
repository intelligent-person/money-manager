import React from 'react';
import AddTransaction from "../components/AddTransactions/AddTransaction";
import {useFetchCategories} from "../hooks/categories/useFetchCategories";
import {AddTransactionNavigateProps} from "../types/navigateProps";
import {View} from "react-native";

let size = 6

const AddTransactionContainer = ({navigation, route}: AddTransactionNavigateProps) => {
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2].name;
  const key = prevRoute === "Income" ? "incomeCategories" : "expensesCategories";

  const {data: categories} = useFetchCategories(key, size);
  return !categories ? <View></View> : (
    <AddTransaction route={route} navigation={navigation} prevRoute={prevRoute} categories={categories} size={size}/>
  );
};

export default AddTransactionContainer;