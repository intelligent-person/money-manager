import React from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import Swiper from "react-native-swiper";
import CategoryIcon from "../CategoryIcon";
import AddCategoryButton from "./AddCategoryButton";
import {Category} from "../../types/types";
import {UserCategoriesProps} from "../../types/componentsProps";
import {normalize} from "../../utils/normalizeSize";

const BannerWidth = Dimensions.get("window").width;

const UserCategories: React.FC<UserCategoriesProps> = ({
    navigation,
    route,
    categories,
    size,
    selectedCategory,
    setSelectedCategory
  }) => {

  return (
    <View style={styles.categoriesWrapper}>
      <Swiper
        showsButtons={true}
        showsPagination={false}
        loop={false}
        width={BannerWidth}
      >
        {categories.map((array: Category[], index: number) => (
          <View style={styles.categoriesRowWrapper} key={index}>
            {array.map((category: Category, subIndex) =>
              subIndex === size - 1 && index === categories.length - 1 ? (
                <AddCategoryButton navigation={navigation} route={route}/>
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
            {index === categories.length - 1 && (
              <AddCategoryButton navigation={navigation} route={route}/>
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
    height: normalize(160),
  },
  categoriesRowWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: normalize(10),
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: normalize(20),
  },
})

export default UserCategories;
