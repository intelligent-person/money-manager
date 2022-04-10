import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "./src/components/Screen1";
import Screen2 from "./src/components/Screen2";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTransaction from "./src/components/AddTransactions/AddTransaction";
import AddCategory from "./src/components/AddCategory/AddCategory";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./src/styles/Theme";
import {RootStackParamList} from "./src/types/types";

const Tab = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
