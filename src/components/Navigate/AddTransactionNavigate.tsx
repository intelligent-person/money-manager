import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { BottomNavigateProps } from "../../types/navigateProps";

const AddTransactionNavigate = ({ route, navigation }: BottomNavigateProps) => {
  const color =
    route.name === "Income" ? ["#0eb713", "#3ae83a"] : ["#970dbd", "#eb53f1"];
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("AddTransaction")}
    >
      <View style={styles.add}>
        <LinearGradient
          end={{ x: 0.4, y: 0.8 }}
          colors={color}
          style={styles.gradient}
        >
          <AntDesign name={"plus"} size={30} color={"white"} />
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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

export default AddTransactionNavigate;
