import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableHighlight } from "../../styles/touchable";
import {AddTransactionNavigateProps} from "../../types/navigateProps";
import { StyleSheet, View, Text } from "react-native";

const AddCategoryButton = ({ navigation }: AddTransactionNavigateProps) => {
  return (
    <View style={styles.category}>
      <TouchableHighlight
        category
        underlayColor={"#e3e3e3"}
        onPress={() => navigation.navigate("AddCategory")}
      >
        <MaterialCommunityIcons name={"plus"} size={40} color="grey" />
      </TouchableHighlight>
      <Text style={styles.addCategoryText}>Добавить</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    alignItems: "center",
    width: 100,
    marginBottom: 10,
  },
  addCategoryText: {
    color: "grey",
  },
});

export default AddCategoryButton;
