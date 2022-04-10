import React from "react";
import { NameCreatedCategoryProps } from "../../types/componentsProps";
import { Keyboard, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Input } from "../../styles/inputs";

const NameCreatedCategory: React.FC<NameCreatedCategoryProps> = ({
  handleChange,
  values,
  selectedCategory,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {selectedCategory && (
        <MaterialCommunityIcons
          name={selectedCategory}
          size={30}
          color="grey"
        />
      )}
      <Input
        addCategory
        placeholder={"Название категории"}
        selectionColor={"#b2b2b2"}
        underlineColorAndroid={"#b2b2b2"}
        value={values.title}
        onBlur={Keyboard.dismiss}
        onChangeText={handleChange("title")}
      />
    </View>
  );
};

export default React.memo(NameCreatedCategory);
