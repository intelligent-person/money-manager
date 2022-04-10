import React from "react";
import { TouchableHighlight } from "../styles/touchable";
import { NumberButtonProps } from "../types/componentsProps";
import {StyleSheet, Text} from "react-native";

const NumberButton: React.FC<NumberButtonProps> = ({ number, writeAmount }) => {
  return (
    <TouchableHighlight
      numberButton
      underlayColor={"#dedcdc"}
      onPress={() => writeAmount(number)}
    >
      <Text style={styles.number}>{number}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  number: {
    fontSize: 30,
    alignItems: "center",
    fontWeight: "600",
  },
});

export default NumberButton;
