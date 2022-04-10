import React, { useMemo } from "react";
import { AddTransactionAmountProps } from "../../types/componentsProps";
import { StyleSheet, Text, View } from "react-native";
import { useNumberWithCommas } from "../../hooks/useNumberWithCommas";

const TransactionAmount: React.FC<AddTransactionAmountProps> = ({
  amount,
}) => {
  const { amountWithCommas } = useMemo(
    () => useNumberWithCommas(amount),
    [amount]
  );
  return (
    <View style={styles.addTransactionAmount}>
      <Text style={styles.amount}>{amountWithCommas}</Text>
      <Text style={styles.addTransactionCurrency}>UAN</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  addTransactionAmount: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  addTransactionCurrency: {
    fontSize: 25,
    fontWeight: "200",
  },
  amount: {
    fontSize: 42,
    marginRight: 15,
    fontWeight: "bold",
  },
});
export default TransactionAmount;
