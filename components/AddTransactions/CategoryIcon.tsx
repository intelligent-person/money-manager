import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableHighlight } from "react-native";
import { View, Text } from "react-native";

type Props = {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  focusName: string;
  color: string;
  name: string;
  setFocusName: (name: string) => void;
};
const CategoryIcon: React.FC<Props> = ({
  name,
  focusName,
  setFocusName,
  color,
  iconName,
}) => {
  return (
    <View style={styles.category}>
      <TouchableHighlight
        underlayColor={color}
        style={[
          styles.button,
          {
            backgroundColor: focusName
              ? focusName === iconName
                ? color
                : "#dedcdc"
              : color,
          },
        ]}
        onPress={() => setFocusName(focusName === iconName ? "" : iconName)}
      >
        <MaterialCommunityIcons name={iconName} size={40} color="white" />
      </TouchableHighlight>
      <Text style={styles.text}>
        {name.length > 13 ? name.slice(0, 11) + "..." : name}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    shadowColor: "black",

    borderRadius: 50,
    elevation: 15,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  category: {
    alignItems: "center",
    width: 100,
    marginBottom: 10,
  },
  text: {
    color: "grey",
  },
});

export default CategoryIcon;
