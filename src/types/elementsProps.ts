import {TextInputProps, TouchableHighlightProps, TouchableOpacityProps} from "react-native";
import { theme } from "../styles/Theme";

export type TouchableHighlightElementProps = {
    theme?: typeof theme;
    category?: boolean;
    nav?: boolean;
    numberButton?: boolean
    addAmount?: boolean
} & TouchableHighlightProps;

export type TouchableOpacityElementProps = {
    theme?: typeof theme;
    nav?: boolean;
} & TouchableOpacityProps;

export type InputElementProps = {
    theme?: typeof theme;
    addTransaction?: boolean;
    addCategory?: boolean;
} & TextInputProps;
