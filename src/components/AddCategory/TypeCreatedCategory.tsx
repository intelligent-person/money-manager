import React from "react";
import { TypeCreatedCategoryProps } from "../../types/componentsProps";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

const TypeCreatedCategory: React.FC<TypeCreatedCategoryProps> = ({
  handleChange,
  values,
}) => {
  return (
    <View>
      <RadioButton.Group
        onValueChange={handleChange("transactionType")}
        value={values.transactionType}
      >
        <View style={styles.flex}>
          <View style={styles.radio}>
            <RadioButton value="Income" />
            <Text>Доходы</Text>
          </View>
          <View style={styles.radio}>
            <RadioButton value="Expenses" />
            <Text>Расходы</Text>
          </View>
        </View>
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "flex-start",
  },
  radio: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default React.memo(TypeCreatedCategory);
