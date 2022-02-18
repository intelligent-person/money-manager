import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../App";
import BottomNavigation from "./BottomNavigate";
import GestureRecognizer from "react-native-swipe-gestures";
import Header from "./Header";

type NavigateProps = NativeStackScreenProps<RootStackParamList, "Income">;

const Screen1 = ({ navigation, route }: NavigateProps) => {
  return (
    <View style={styles.screen}>
      <Header />
      <GestureRecognizer onSwipeLeft={() => navigation.navigate("Expenses")}>
        <Text style={styles.title}>Screen 1</Text>
      </GestureRecognizer>
      <BottomNavigation navigation={navigation} route={route} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
  title: {
    padding: 20,
    fontSize: 42,
  },
});
export default Screen1;
