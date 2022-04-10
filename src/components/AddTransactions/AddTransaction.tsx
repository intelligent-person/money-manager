import React, { useState } from "react";
import NumberButton from "../NumberButton";
import EraseAmountButton from "./EraseAmountButton";
import SubmitButton from "../SubmitButton";
import UserCategories from "./UserCategories";
import TitleTransaction from "./TitleTransaction";
import { AddTransactionNavigateProps } from "../../types/navigateProps";
import { StyleSheet, View} from "react-native";
import TransactionAmount from "./TransactionAmount";

const AddTransaction = ({ navigation, route }: AddTransactionNavigateProps) => {
  const [amount, setAmount] = useState("0");
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2].name;

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

  const onSubmit = () => {
    setAmount("0");
  };
  return (
    <View style={styles.screen}>
      <TitleTransaction />
      <View style={styles.params}>
        <UserCategories navigation={navigation} route={route} />

        <View style={styles.addTransactionField}>
          <TransactionAmount amount={amount} />

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

          <SubmitButton
            disable={amount === "0"}
            prevRoute={prevRoute}
            onSubmit={onSubmit}
            type={"amount"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
  },
  params: {
    alignItems: "center",
  },
  addTransactionField: {
    position: "relative",
    width: "100%",
    alignItems: "center",
    bottom: 20,
  },
  addTransactionNumberRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
  },
});

export default AddTransaction;
