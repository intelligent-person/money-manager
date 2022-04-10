import React, { useMemo } from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";
import { Formik } from "formik";
import { getCategory, storeCategory } from "../../../AsyncStorage/CategoryStorage";
import { categories } from "../../utils/categories";
import { loginValidationSchema } from "../../validate/addCategory";
import AllCategories from "./AllCategories";
import { AddCategoryNavigateProps } from "../../types/navigateProps";
import { CategoryIconType } from "../../types/types";
import SubmitButton from "../SubmitButton";
import { useFlexCategories } from "../../hooks/useFlexCategories";
import TypeCreatedCategory from "./TypeCreatedCategory";
import NameCreatedCategory from "./NameCreatedCategory";
import ErrorText from "../ErrorText";

const AddCategory = ({ navigation }: AddCategoryNavigateProps) => {
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 3].name;
  const initialColor = prevRoute === "Income" ? "#31c536" : "#b227d9";
  const [color, setColor] = useState(initialColor);
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryIconType>("view-list");

  const { subCategories } = useMemo(
    () => useFlexCategories(categories, 9),
    [categories]
  );

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
      {({ touched, errors, handleChange, handleSubmit, values }) => (
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <NameCreatedCategory
              values={values}
              selectedCategory={selectedCategory}
              handleChange={handleChange}
            />
            {errors.title && touched.title && <ErrorText text={errors.title} />}

            <TypeCreatedCategory handleChange={handleChange} values={values} />
            {errors.transactionType && touched.transactionType && (
              <ErrorText text={errors.transactionType} />
            )}

            <AllCategories
              subCategories={subCategories}
              setSelectedCategory={setSelectedCategory}
              color={color}
              selectedCategory={selectedCategory}
            />

            <ColorPicker
              onColorChangeComplete={(color) => setColor(color)}
              color={color}
              swatches={false}
              row={false}
              sliderHidden={true}
            />

            <SubmitButton
              onSubmit={handleSubmit}
              prevRoute={prevRoute}
              disable={selectedCategory === "view-list"}
              type={"category"}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
});

export default AddCategory;
