import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeCategory = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log(error);
  }
};
export const getCategory = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    // error reading value
    console.log(e);
  }
};