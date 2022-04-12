import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return await getItem(key)
  } catch (error) {
    console.log(error);
  }
};
export const getItem = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    // error reading value
    console.log(e);
  }
};