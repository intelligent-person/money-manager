import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

type Props = {
  number: string;
  addToSum: (number: string) => void;
};

const AddToSumButton: React.FC<Props> = ({ number, addToSum }) => {
  return (
    <TouchableHighlight
      underlayColor={"#dedcdc"}
      style={styles.button}
      onPress={() => addToSum(number)}
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
  button: {
    width: 60,
    height: 60,
    shadowColor: "black",
    backgroundColor: "white",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#dedcdc",
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 15,
  },
});
export default AddToSumButton;
