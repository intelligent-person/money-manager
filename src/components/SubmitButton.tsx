import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableHighlight } from "../styles/touchable";
import { css } from "@emotion/native";
import { SubmitButtonProps } from "../types/componentsProps";
import { StyleSheet, Text } from "react-native";

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onSubmit,
  prevRoute,
  disable,
  type,
}) => {
  const colors =
    prevRoute === "Income" ? ["#0eb713", "#3ae83a"] : ["#970dbd", "#eb53f1"];
  return (
    <TouchableHighlight submit onPress={onSubmit} disabled={disable}>
      <LinearGradient
        end={{ x: 0.4, y: 2 }}
        colors={colors}
        style={css`
          border-radius: 50px;
          width: 170px;
          height: 45px;
          align-items: center;
          justify-content: center;
          opacity: ${disable ? "0.7" : "1"};
        `}
      >
        <Text style={styles.addAmountButtonText}>{type === 'amount' ? 'Добавить' : 'Создать'}</Text>
      </LinearGradient>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  addAmountButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SubmitButton;
