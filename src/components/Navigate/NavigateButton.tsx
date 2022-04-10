import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "../../styles/touchable";
import { NavigateButtonProps } from "../../types/componentsProps";
import { AntDesign } from "@expo/vector-icons";

const NavigateButton: React.FC<NavigateButtonProps> = ({
  route,
  type,
  navigation,
}) => {
  const expensesColor = route.name === "Expenses" ? "#b227d9" : "black";
  const incomeColor = route.name === "Income" ? "#31c536" : "black";
  const color = type === "Expenses" ? expensesColor : incomeColor;
  return (
    <TouchableOpacity nav onPress={() => navigation.navigate(type)}>
      <View style={styles.navigate}>
        <AntDesign
          name={type === "Expenses" ? "upload" : "download"}
          size={30}
          color={color}
        />
        {route.name === type && (
          <Text style={[styles.text, { color }]}>{route.name}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  navigate: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default NavigateButton;
