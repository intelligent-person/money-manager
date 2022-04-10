import React from "react";
import { View, StyleSheet } from "react-native";
import { BottomNavigateProps } from "../../types/navigateProps";
import NavigateButton from "./NavigateButton";
import AddTransactionNavigate from "./AddTransactionNavigate";

const BottomNavigate = ({ navigation, route }: BottomNavigateProps) => {
  return (
    <View style={styles.footer}>
      <NavigateButton type={'Expenses'} navigation={navigation} route={route}/>
      <AddTransactionNavigate navigation={navigation} route={route}/>
      <NavigateButton type={'Income'} navigation={navigation} route={route}/>
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
});

export default BottomNavigate;
