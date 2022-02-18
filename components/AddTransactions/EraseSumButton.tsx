import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  eraseSum: () => void;
};

const EraseSumButton: React.FC<Props> = ({ eraseSum }) => {
  return (
    <TouchableHighlight
      underlayColor={"#dedcdc"}
      style={styles.button}
      onPress={eraseSum}
    >
      <Ionicons name="ios-backspace-outline" size={30} color="black" />
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
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
export default EraseSumButton;
