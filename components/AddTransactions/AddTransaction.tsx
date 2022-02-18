import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import NumberWithCommas from "../SecondaryFunctions/NumberWithCommas";
import AddToSumButton from "./AddToSumButton";
import EraseSumButton from "./EraseSumButton";
import SubmitButton from "./SubmitButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import Categories from "./Categories";
import TitleTransaction from "./TitleTransaction";

type NavigateProps = NativeStackScreenProps<
  RootStackParamList,
  "AddTransaction"
>;
const AddTransaction = ({ navigation, route }: NavigateProps) => {
  const [sum, setSum] = useState("0");
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2].name;

  const addToSum = (number: string) => {
    setSum((prevState) =>
      prevState.length < 10
        ? prevState !== "0"
          ? prevState.concat(number)
          : number === "."
          ? "0."
          : number
        : prevState
    );
  };

  const eraseSum = () => {
    setSum((prevState) =>
      prevState.length === 1
        ? "0"
        : prevState.substring(0, prevState.length - 1)
    );
  };

  const onSubmit = () => {
    setSum("0");
  };
  return (
    <View style={styles.screen}>
      <TitleTransaction />
      <View style={styles.params}>
        <Categories navigation={navigation} route={route} />

        <View style={styles.fillField}>
          <View style={styles.bill}>
            <Text style={styles.count}>
              <NumberWithCommas sum={sum} />
            </Text>
            <Text style={styles.currency}>UAN</Text>
          </View>
          <View style={styles.numberRow}>
            <AddToSumButton number={"1"} addToSum={addToSum} />
            <AddToSumButton number={"2"} addToSum={addToSum} />
            <AddToSumButton number={"3"} addToSum={addToSum} />
          </View>
          <View style={styles.numberRow}>
            <AddToSumButton number={"4"} addToSum={addToSum} />
            <AddToSumButton number={"5"} addToSum={addToSum} />
            <AddToSumButton number={"6"} addToSum={addToSum} />
          </View>
          <View style={styles.numberRow}>
            <AddToSumButton number={"7"} addToSum={addToSum} />
            <AddToSumButton number={"8"} addToSum={addToSum} />
            <AddToSumButton number={"9"} addToSum={addToSum} />
          </View>
          <View style={styles.numberRow}>
            <AddToSumButton number={"."} addToSum={addToSum} />
            <AddToSumButton number={"0"} addToSum={addToSum} />
            <EraseSumButton eraseSum={eraseSum} />
          </View>
          <SubmitButton prevRoute={prevRoute} onSubmit={onSubmit} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    position: "absolute",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
  },
  params: {
    alignItems: "center",
  },
  fillField: {
    position: "relative",
    width: "100%",
    alignItems: "center",

    bottom: 25,
  },
  numberRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
  },

  bill: {
    flexDirection: "row",
    padding: 20,
  },
  count: {
    fontSize: 42,

    marginRight: 15,
    fontWeight: "bold",
  },
  currency: {
    fontSize: 25,
    fontWeight: "200",
  },
});
export default AddTransaction;
