import React, { useEffect, useState } from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import Swiper from "react-native-swiper";
import CategoryIcon from "../CategoryIcon";
import AddCategoryButton from "./AddCategoryButton";
import { getCategory } from "../../../AsyncStorage/CategoryStorage";
import { useMemo } from "react";
import { useFlexCategories } from "../../hooks/useFlexCategories";
import {Category, SelectedCategory} from "../../types/types";
import { CategoriesNavigateProps } from "../../types/navigateProps";

const BannerWidth = Dimensions.get("window").width;

const UserCategories = ({ navigation, route }: CategoriesNavigateProps) => {
  const [selectedCategory, setSelectedCategory] =
      useState<SelectedCategory>(null);
  const [categories, setCategories] = useState([]);
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2].name;

  useEffect(() => {
    const key =
      prevRoute === "Income" ? "incomeCategories" : "expensesCategories";
    const fetchCategories = async () => {
      const categories = await getCategory(key);
      setCategories(categories);
    };
    fetchCategories().catch(console.error);
  }, []);

  const { subCategories, size } = useMemo(
    () => useFlexCategories(categories, 6),
    [categories]
  );

  return (
    <View style={styles.categoriesWrapper}>
      <Swiper
        showsButtons={true}
        showsPagination={false}
        loop={false}
        width={BannerWidth}
      >
        {subCategories.map((array, index) => (
          <View style={styles.categoriesRowWrapper} key={index}>
            {array.map((category: Category, subIndex) =>
              subIndex === size - 1 && index === subCategories.length - 1 ? (
                <AddCategoryButton navigation={navigation} route={route} />
              ) : (
                <CategoryIcon
                  key={category.name}
                  name={category.name}
                  iconName={category.iconName}
                  selectedCategory={selectedCategory}
                  color={category.color}
                  setSelectedCategory={setSelectedCategory}
                />
              )
            )}
            {index === subCategories.length - 1 && (
              <AddCategoryButton navigation={navigation} route={route} />
            )}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesWrapper: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 200,
  },
  categoriesRowWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
})

export default UserCategories;
