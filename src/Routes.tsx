import React from 'react';
import Screen2 from "./components/Screen2";
import AddCategory from "./components/AddCategory/AddCategory";
import Screen1 from "./components/Screen1";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./types/types";
import AddTransactionContainer from "./container/AddTransactionContainer";

const Tab = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Expenses"
        component={Screen2}
        options={{headerShown: false, animation: "fade"}}
      />
      <Tab.Screen
        name="AddTransaction"
        component={AddTransactionContainer}
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
        name="Income"
        component={Screen1}
        options={{headerShown: false, animation: "fade"}}
      />
    </Tab.Navigator>
  );
};

export default Routes;