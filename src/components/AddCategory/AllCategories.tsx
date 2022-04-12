import React from "react";
import { AllCategoriesProps } from "../../types/componentsProps";
import CategoryIcon from "../CategoryIcon";
import { Dimensions, StyleSheet, View } from "react-native";
import Swiper from "react-native-swiper";
import {normalize} from "../../utils/normalizeSize";

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
        paginationStyle={{ marginBottom: normalize(-30) }}
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
    height: normalize(200),
    marginTop: normalize(10),
  },
  categoriesRowWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: normalize(20),
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: normalize(20),
  },
});

export default React.memo(AllCategories);
