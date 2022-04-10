import React from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { BottomNavigateProps } from "../types/navigateProps";
import { TouchableOpacity } from "../styles/touchable";

const BottomNavigate = ({ navigation, route }: BottomNavigateProps) => {
  const expensesColor = route.name === "Expenses" ? "#b227d9" : "black";
  const incomeColor = route.name === "Income" ? "#31c536" : "black";
  const addColor =
    route.name === "Income" ? ["#0eb713", "#3ae83a"] : ["#970dbd", "#eb53f1"];
  return (
    <View style={styles.footer}>
      <TouchableOpacity nav onPress={() => navigation.navigate("Expenses")}>
        <View style={styles.navigate}>
          <AntDesign name={"upload"} size={30} color={expensesColor} />
          {route.name === "Expenses" && (
            <Text style={[styles.text, { color: expensesColor }]}>
              {route.name}
            </Text>
          )}
        </View>
      </TouchableOpacity>

      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("AddTransaction")}
      >
        <View style={styles.add}>
          <LinearGradient
            end={{ x: 0.4, y: 0.8 }}
            colors={addColor}
            style={styles.gradient}
          >
            <AntDesign name={"plus"} size={30} color={"white"} />
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>

      <TouchableOpacity nav onPress={() => navigation.navigate("Income")}>
        <View style={styles.navigate}>
          <AntDesign name={"download"} size={30} color={incomeColor} />
          {route.name === "Income" && (
            <Text style={[styles.text, { color: incomeColor }]}>
              {route.name}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: 20,
    position: "absolute",
    width: "100%",
    bottom: 0,
    flexDirection: "row",
  },
  text: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  navigate: {
    flexDirection: "row",
    alignItems: "center",
  },
  add: {
    elevation: 8,
    borderRadius: 50,
    bottom: 40,
  },
  gradient: {
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BottomNavigate;
