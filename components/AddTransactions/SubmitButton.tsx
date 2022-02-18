import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  onSubmit: () => void;
  prevRoute: string;
};

const SubmitButton: React.FC<Props> = ({ onSubmit, prevRoute }) => {
  const addColor =
    prevRoute === "Income" ? ["#0eb713", "#3ae83a"] : ["#970dbd", "#eb53f1"];
  return (
    <TouchableHighlight style={styles.button} onPress={onSubmit}>
      <LinearGradient
        end={{ x: 0.4, y: 2 }}
        colors={addColor}
        style={styles.gradient}
      >
        <Text style={styles.text}>Добавить</Text>
      </LinearGradient>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    shadowColor: "black",
    borderRadius: 50,
    elevation: 5,
    marginTop: 10,
  },
  gradient: {
    borderRadius: 50,
    width: 170,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SubmitButton;
