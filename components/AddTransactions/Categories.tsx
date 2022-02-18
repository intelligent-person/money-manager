import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Swiper from "react-native-swiper";
import CategoryIcon from "./CategoryIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import AddCategoryButton from "./AddCategoryButton";
import { getCategory } from "../../AsyncStorage/CategoryStorage";

export type Category = {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
  name: string;
};
type NavigateProps = NativeStackScreenProps<
  RootStackParamList,
  "AddTransaction"
>;

const BannerWidth = Dimensions.get("window").width;

const Categories = ({ navigation, route }: NavigateProps) => {
  const [focusName, setFocusName] = useState("");
  const [categories, setCategories] = useState([]);
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2].name;

  useEffect(async () => {
    const key =
      prevRoute === "Income" ? "incomeCategories" : "expensesCategories";
    const categories = await getCategory(key);
    setCategories(categories);
  }, []);

  let size = 6;
  let subCategories = [];
  for (let i = 0; i < Math.ceil(categories.length / size); i++) {
    subCategories[i] = categories.slice(i * size, i * size + size);
  }
  if (categories.length % size === 0) subCategories[subCategories.length] = [];
  return (
    <View style={styles.wrapper}>
      <Swiper
        showsButtons={true}
        showsPagination={false}
        loop={false}
        width={BannerWidth}
      >
        {subCategories.map((array, index) => (
          <View style={styles.rowWrapper} key={index}>
            {array.map((category: Category, subIndex) =>
              subIndex === size - 1 && index === subCategories.length - 1 ? (
                <AddCategoryButton navigation={navigation} route={route} />
              ) : (
                <CategoryIcon
                  key={category.name}
                  name={category.name}
                  iconName={category.iconName}
                  focusName={focusName}
                  color={category.color}
                  setFocusName={setFocusName}
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
  wrapper: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 200,
  },
  rowWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
    marginTop: 5,
  },
  title: {
    fontSize: 17,
    marginBottom: 10,
  },
});
export default Categories;
