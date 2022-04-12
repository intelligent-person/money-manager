import React, { useState } from "react";
import TransactionAmount from "./TransactionAmount";
import { StyleSheet, View } from "react-native";
import NumberButton from "../NumberButton";
import EraseAmountButton from "./EraseAmountButton";
import SubmitButton from "../SubmitButton";
import { AddTransactionFieldProps } from "../../types/componentsProps";
import { useCategoryVisible } from "../../hooks/custom/useCategoryVisible";
import { useAddCurrency } from "../../hooks/currency/useAddCurrency";
import { useAddBalance } from "../../hooks/balance/useAddBalance";
import { useFetchBalance } from "../../hooks/balance/useFetchBalance";

const AddTransactionField: React.FC<AddTransactionFieldProps> = ({
  prevRoute,
  selectedCategory,
  title,
}) => {
  const [amount, setAmount] = useState("0");
  const [userCurrency, setUserCurrency] = useState("");

  const { isKeyboardVisible } = useCategoryVisible();
  const { data: prevBalance } = useFetchBalance(prevRoute);

  const mutation = useAddBalance();

  const writeAmount = (number: string) => {
    setAmount((prevState) =>
      prevState.length < 10
        ? prevState !== "0"
          ? prevState.concat(number)
          : number === "."
          ? "0."
          : number
        : prevState
    );
  };

  const eraseAmount = () => {
    setAmount((prevState) =>
      prevState.length === 1
        ? "0"
        : prevState.substring(0, prevState.length - 1)
    );
  };

  const onSubmit = async () => {
    setAmount("0");
    await mutation.mutateAsync({
      type: prevRoute,
      balance: {
        amount: prevBalance.amount + Number(amount),
        date: Date.now(),
        currency: userCurrency,
        title,
      },
    });
  };

  return (
    <>
      <TransactionAmount
        amount={amount}
        userCurrency={userCurrency}
        setUserCurrency={setUserCurrency}
      />
      {!isKeyboardVisible && (
        <>
          <View style={styles.addTransactionNumberRow}>
            <NumberButton number={"1"} writeAmount={writeAmount} />
            <NumberButton number={"2"} writeAmount={writeAmount} />
            <NumberButton number={"3"} writeAmount={writeAmount} />
          </View>
          <View style={styles.addTransactionNumberRow}>
            <NumberButton number={"4"} writeAmount={writeAmount} />
            <NumberButton number={"5"} writeAmount={writeAmount} />
            <NumberButton number={"6"} writeAmount={writeAmount} />
          </View>
          <View style={styles.addTransactionNumberRow}>
            <NumberButton number={"7"} writeAmount={writeAmount} />
            <NumberButton number={"8"} writeAmount={writeAmount} />
            <NumberButton number={"9"} writeAmount={writeAmount} />
          </View>
          <View style={styles.addTransactionNumberRow}>
            <NumberButton number={"."} writeAmount={writeAmount} />
            <NumberButton number={"0"} writeAmount={writeAmount} />
            <EraseAmountButton eraseAmount={eraseAmount} />
          </View>
        </>
      )}
      <SubmitButton
        disable={amount === "0" || !selectedCategory}
        prevRoute={prevRoute}
        onSubmit={onSubmit}
        type={"amount"}
      />
    </>
  );
};

const styles = StyleSheet.create({
  addTransactionNumberRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
  },
});

export default AddTransactionField;
