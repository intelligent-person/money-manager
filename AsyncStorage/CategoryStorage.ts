import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const storeCategory = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    const newToDo = await AsyncStorage.setItem(key, jsonValue);
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

export const categories: Array<keyof typeof MaterialCommunityIcons.glyphMap> = [
  "baby-carriage",
  "car",
  "arm-flex",
  "food",
  "bank",
  "credit-card",
  "shopping",
  "airplane",
  "antenna",
  "album",
  "bacteria",
  "basket",
  "bed",
  "beer",
  "bike",
  "biathlon",
  "bitcoin",
  "book",
  "bowl-mix",
  "briefcase",
  "cake",
  "camera",
  "campfire",
  "bus",
  "cards",
  "cart",
  "cash",
  "coffee",
  "credit-card-multiple",
  "desktop-mac",
  "diamond",
  "dog-side",
  "doctor",
  "face",
  "face-woman",
  "flower",
  "food-croissant",
  "football",
  "gamepad",
  "gift",
  "glass-mug-variant",
  "glass-wine",
  "glasses",
  "hair-dryer",
  "hand-heart",
  "hanger",
  "heart",
  "home",
  "home-city",
  "human-baby-changing-table",
  "ice-cream",
  "island",
  "kabaddi",
  "library",
  "lightbulb-on-outline",
  "microsoft-xbox-controller",
  "movie-open",
  "music-circle",
  "palette-outline",
  "party-popper",
  "phone",
  "piggy-bank",
  "school",
];
