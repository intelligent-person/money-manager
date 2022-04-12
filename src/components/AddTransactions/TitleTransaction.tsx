import React from "react";
import { Keyboard } from "react-native";
import { Input } from "../../styles/inputs";
import {TitleTransactionProps} from "../../types/componentsProps";

const TitleTransaction: React.FC<TitleTransactionProps> = ({setTitle}) => {
  const [text, setTex] = React.useState("");
  const onBlur = () => {
    Keyboard.dismiss
    setTitle(text)
  }

  return (
    <Input
      addTransaction
      placeholder={"Заголовок"}
      selectionColor={"#b2b2b2"}
      underlineColorAndroid={"#b2b2b2"}
      value={text}
      onBlur={onBlur}
      onChangeText={(text) => setTex(text)}
    />
  );
};
export default TitleTransaction;
