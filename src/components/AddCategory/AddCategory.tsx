import React, {useMemo} from "react";
import {useState} from "react";
import {View, StyleSheet, Keyboard} from "react-native";
import ColorPicker from "react-native-wheel-color-picker";
import {Formik} from "formik";
import {getItem} from "../../../AsyncStorage/AsyncStorage";
import {categories} from "../../utils/categories";
import {loginValidationSchema} from "../../validate/addCategory";
import AllCategories from "./AllCategories";
import {AddCategoryNavigateProps} from "../../types/navigateProps";
import {CategoryIconType} from "../../types/types";
import SubmitButton from "../SubmitButton";
import {useFlexCategories} from "../../hooks/custom/useFlexCategories";
import TypeCreatedCategory from "./TypeCreatedCategory";
import NameCreatedCategory from "./NameCreatedCategory";
import ErrorText from "../ErrorText";
import {useAddCategory} from "../../hooks/categories/useAddCategory";
import {normalize} from "../../utils/normalizeSize";
import {useCategoryVisible} from "../../hooks/custom/useCategoryVisible";

const AddCategory = ({navigation}: AddCategoryNavigateProps) => {
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 3].name;
  const initialColor = prevRoute === "Income" ? "#31c536" : "#b227d9";
  const [color, setColor] = useState(initialColor);
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryIconType>("view-list");

  const {isKeyboardVisible} = useCategoryVisible()

  const mutation = useAddCategory()

  const {subCategories} = useMemo(
    () => useFlexCategories(categories, 9),
    [categories]
  );

  const onSubmit = async (values: any) => {
    const key =
      values.transactionType === "Income"
        ? "incomeCategories"
        : "expensesCategories";
    const prevState = await getItem(key);
    await mutation.mutateAsync({
      key, newCategory: [
        {name: values.title, iconName: selectedCategory, color},
        ...prevState,
      ]
    })
    navigation.goBack();
  };

  return (
    <Formik
      initialValues={{title: "", transactionType: ""}}
      onSubmit={onSubmit}
      validationSchema={loginValidationSchema}
    >
      {({touched, errors, handleChange, handleSubmit, values}) => (
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <NameCreatedCategory
              values={values}
              selectedCategory={selectedCategory}
              handleChange={handleChange}
            />
            {errors.title && touched.title && <ErrorText text={errors.title}/>}

            <TypeCreatedCategory handleChange={handleChange} values={values}/>
            {errors.transactionType && touched.transactionType && (
              <ErrorText text={errors.transactionType}/>
            )}

            <AllCategories
              subCategories={subCategories}
              setSelectedCategory={setSelectedCategory}
              color={color}
              selectedCategory={selectedCategory}
            />
            {!isKeyboardVisible &&
              <ColorPicker
                onColorChangeComplete={(color) => setColor(color)}
                color={color}
                swatches={false}
                row={false}
                sliderHidden={true}
              />
            }
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
  },
});

export default AddCategory;
