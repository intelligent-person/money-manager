import React from "react";
import { Keyboard } from "react-native";
import { Input } from "../../styles/inputs";

const TitleTransaction = () => {
  const [text, setText] = React.useState("");
  return (
    <Input
      addTransaction
      placeholder={"Заголовок"}
      selectionColor={"#b2b2b2"}
      underlineColorAndroid={"#b2b2b2"}
      value={text}
      onBlur={Keyboard.dismiss}
      onChangeText={(text) => setText(text)}
    />
  );
};
export default TitleTransaction;
