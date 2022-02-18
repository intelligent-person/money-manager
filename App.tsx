import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTransaction from "./components/AddTransactions/AddTransaction";
import AddCategory from "./components/AddCategory/AddCategory";

export type RootStackParamList = {
  Income: undefined;
  Expenses: undefined;
  AddTransaction: undefined;
  AddCategory: undefined;
  SetColor: undefined;
};

const Tab = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Expenses"
          component={Screen2}
          options={{ headerShown: false, animation: "fade" }}
        />
        <Tab.Screen
          name="AddTransaction"
          component={AddTransaction}
          options={{
            headerShadowVisible: false,
            headerTitle: "Добавление операции",
            animation: "fade",
          }}
        />
        <Tab.Screen
          name="AddCategory"
          component={AddCategory}
          options={{
            headerShadowVisible: false,
            headerTitle: "Создание категории",
            animation: "slide_from_right",
          }}
        />
        <Tab.Screen
          name="SetColor"
          component={AddCategory}
          options={{
            headerShadowVisible: false,
            headerTitle: "Выбор цвета",
            animation: "fade",
          }}
        />
        <Tab.Screen
          name="Income"
          component={Screen1}
          options={{ headerShown: false, animation: "fade" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
