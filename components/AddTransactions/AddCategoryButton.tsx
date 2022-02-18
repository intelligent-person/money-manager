import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableHighlight } from "react-native";
import { View, Text } from "react-native";
import { useState } from "react";
import AddCategory from "../AddCategory/AddCategory";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type NavigateProps = NativeStackScreenProps<
  RootStackParamList,
  "AddTransaction"
>;
const AddCategoryButton = ({ navigation }: NavigateProps) => {
  return (
    <View style={styles.category}>
      <TouchableHighlight
        underlayColor={"#e3e3e3"}
        style={styles.button}
        onPress={() => navigation.navigate("AddCategory")}
      >
        <MaterialCommunityIcons name={"plus"} size={40} color="grey" />
      </TouchableHighlight>
      <Text style={styles.text}>Добавить</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    shadowColor: "black",
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 15,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  category: {
    alignItems: "center",
    width: 100,
    marginBottom: 10,
  },
  text: {
    color: "grey",
  },
});

export default AddCategoryButton;
