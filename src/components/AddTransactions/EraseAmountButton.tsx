import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableHighlight } from "../../styles/touchable";
import {EraseAmountButtonProps} from "../../types/componentsProps";

const EraseAmountButton: React.FC<EraseAmountButtonProps> = ({ eraseAmount }) => {
  return (
    <TouchableHighlight
      numberButton
      underlayColor={"#dedcdc"}
      onPress={eraseAmount}
    >
      <Ionicons name="ios-backspace-outline" size={30} color="black" />
    </TouchableHighlight>
  );
};
export default EraseAmountButton;
