import React, {useState} from "react";
import UserCategories from "./UserCategories";
import TitleTransaction from "./TitleTransaction";
import {StyleSheet, View} from "react-native";
import {normalize} from "../../utils/normalizeSize";
import AddTransactionField from "./AddTransactionField";
import {AddTransactionProps} from "../../types/componentsProps";
import {SelectedCategory} from "../../types/types";

const AddTransaction: React.FC<AddTransactionProps> = ({navigation, route, prevRoute, size, categories}) => {
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>(null);
  const [title, setTitle] = React.useState("");

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TitleTransaction setTitle={setTitle}/>
        <UserCategories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          navigation={navigation}
          route={route}
          categories={categories}
          size={size}
        />
        <AddTransactionField
          prevRoute={prevRoute}
          selectedCategory={selectedCategory}
          title={title}
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    position: "absolute",
    width: "95%",
    height: "98%",
    backgroundColor: "white",
    paddingVertical: normalize(15),
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: normalize(5),
  }
});

export default AddTransaction;
