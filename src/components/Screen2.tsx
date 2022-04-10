import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomNavigate from "./Navigate/BottomNavigate";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import GestureRecognizer from "react-native-swipe-gestures";
import Header from "./Header";
import { RootStackParamList } from "../types/types";

type NavigateProps = NativeStackScreenProps<RootStackParamList, "Expenses">;
const Screen2 = ({ navigation, route }: NavigateProps) => {
  return (
    <View style={styles.screen}>
      <Header />
      <GestureRecognizer onSwipeRight={() => navigation.navigate("Income")}>
        <Text style={styles.title}>Screen 2</Text>
      </GestureRecognizer>
      <BottomNavigate navigation={navigation} route={route} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
  },
  title: {
    padding: 20,
    fontSize: 42,
  },
});
export default Screen2;
