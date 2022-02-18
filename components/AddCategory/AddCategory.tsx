import React from "react";
import { useState } from "react";
import {
  Dimensions,
  Keyboard,
  Pressable,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import ColorPicker from "react-native-wheel-color-picker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { LinearGradient } from "expo-linear-gradient";
import { RadioButton } from "react-native-paper";
import { Formik } from "formik";
import * as yup from "yup";
import {
  categories,
  getCategory,
  storeCategory,
} from "../../AsyncStorage/CategoryStorage";
import CategoriesPage from "./CategoriesPage";

const loginValidationSchema = yup.object().shape({
  title: yup.string().required("Введите название категории"),
  transactionType: yup.string().required("Выберите тип"),
});

const BannerWidth = Dimensions.get("window").width;

type NavigateProps = NativeStackScreenProps<RootStackParamList, "AddCategory">;
const AddCategory = ({ navigation }: NavigateProps) => {
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 3].name;
  const addColor =
    prevRoute === "Income" ? ["#0eb713", "#3ae83a"] : ["#970dbd", "#eb53f1"];
  const [color, setColor] = useState("grey");
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof MaterialCommunityIcons.glyphMap>("view-list");

  let size = 9;
  let subCategories: any = [];
  for (let i = 0; i < Math.ceil(categories.length / size); i++) {
    subCategories[i] = categories.slice(i * size, i * size + size);
  }

  const onSubmit = async (values: any) => {
    const key =
      values.transactionType === "Income"
        ? "incomeCategories"
        : "expensesCategories";
    const prevState = await getCategory(key);
    await storeCategory(key, [
      { name: values.title, iconName: selectedCategory, color },
      ...prevState,
    ]);
    navigation.goBack();
  };

  return (
    <Formik
      initialValues={{ title: "", transactionType: "" }}
      onSubmit={onSubmit}
      validationSchema={loginValidationSchema}
    >
      {({ touched, errors, isValid, handleChange, handleSubmit, values }) => (
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              {selectedCategory && (
                <MaterialCommunityIcons
                  name={selectedCategory}
                  size={30}
                  color="grey"
                />
              )}

              <TextInput
                placeholder={"Название категории"}
                selectionColor={"#b2b2b2"}
                underlineColorAndroid={"#b2b2b2"}
                style={styles.input}
                value={values.title}
                onBlur={Keyboard.dismiss}
                onChangeText={handleChange("title")}
              />
            </View>
            {errors.title && touched.title && (
              <Text style={{ fontSize: 10, color: "red" }}>{errors.title}</Text>
            )}
            <View>
              <RadioButton.Group
                onValueChange={handleChange("transactionType")}
                value={values.transactionType}
              >
                <View
                  style={{
                    flexDirection: "row",
                    width: "80%",
                    justifyContent: "flex-start",
                  }}
                >
                  <View style={styles.radio}>
                    <RadioButton value="Income" />
                    <Text>Доходы</Text>
                  </View>
                  <View style={styles.radio}>
                    <RadioButton value="Expenses" />
                    <Text>Расходы</Text>
                  </View>
                </View>
              </RadioButton.Group>
            </View>
            {errors.transactionType && touched.transactionType && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.transactionType}
              </Text>
            )}
            <View style={styles.wrapper}>
              <Swiper
                showsButtons={true}
                showsPagination={true}
                loop={false}
                width={BannerWidth}
                paginationStyle={{ marginBottom: -40 }}
              >
                {subCategories.map((categories: any, index: any) => (
                  <CategoriesPage
                    categories={categories}
                    setSelectedCategory={setSelectedCategory}
                    color={color}
                    selectedCategory={selectedCategory}
                    key={index}
                  />
                ))}
              </Swiper>
            </View>
            <ColorPicker
              onColorChangeComplete={(color) => setColor(color)}
              swatches={false}
              row={false}
              sliderHidden={true}
            />
            <TouchableHighlight
              style={[
                styles.submit,
                { opacity: selectedCategory === "view-list" ? 0.5 : 1 },
              ]}
              type={"submit"}
              onPress={handleSubmit}
              disabled={selectedCategory === "view-list"}
            >
              <LinearGradient
                end={{ x: 0.4, y: 2 }}
                colors={addColor}
                style={styles.gradient}
              >
                <Text style={styles.text}>Создать</Text>
              </LinearGradient>
            </TouchableHighlight>
          </View>
        </View>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  submit: {
    shadowColor: "black",
    borderRadius: 50,
    elevation: 5,
    marginTop: 10,
  },
  gradient: {
    borderRadius: 50,
    width: 170,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    shadowColor: "black",
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 5,
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
  radio: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  modalView: {
    width: "95%",
    height: "95%",
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    fontSize: 20,
    width: 250,
    height: 40,
    paddingLeft: 6,
  },
  wrapper: {
    alignItems: "center",
    height: 215,
    marginTop: 20,
  },
  rowWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
});

export default AddCategory;
