import React, { useRef } from "react";
import { Keyboard, TextInput } from "react-native";
import { StyleSheet, Text } from "react-native";

const TitleTransaction = () => {
  const [text, setText] = React.useState("");
  return (
    <TextInput
      placeholder={"Заголовок"}
      selectionColor={"#b2b2b2"}
      underlineColorAndroid={"#b2b2b2"}
      style={styles.input}
      value={text}
      onBlur={Keyboard.dismiss}
      onChangeText={(text) => setText(text)}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    fontSize: 20,
    width: 300,
    height: 40,
    paddingLeft: 6,
  },
});
export default TitleTransaction;
