import React from "react";
import { AllCategoriesProps } from "../../types/componentsProps";
import CategoryIcon from "../CategoryIcon";
import { Dimensions, StyleSheet, View } from "react-native";
import Swiper from "react-native-swiper";

const BannerWidth = Dimensions.get("window").width;

const AllCategories: React.FC<AllCategoriesProps> = ({
  color,
  selectedCategory,
  setSelectedCategory,
  subCategories,
}) => {
  return (
    <View style={styles.wrapper}>
      <Swiper
        showsButtons={true}
        showsPagination={true}
        loop={false}
        width={BannerWidth}
        paginationStyle={{ marginBottom: -40 }}
      >
        {subCategories.map((categories, index: number) => (
          <View style={styles.categoriesRowWrapper} key={index}>
            {categories.map((iconName: any, index: any) => (
              <CategoryIcon
                color={color}
                selectedCategory={selectedCategory}
                iconName={iconName}
                // @ts-ignore
                setSelectedCategory={setSelectedCategory}
                key={index}
              />
            ))}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    height: 215,
    marginTop: 20,
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
});

export default React.memo(AllCategories);
