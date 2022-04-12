import {TextInputProps, TouchableHighlightProps, TouchableOpacityProps, ViewProps} from "react-native";
import { theme } from "../styles/Theme";

export type TouchableHighlightElementProps = {
    theme?: typeof theme;
    category?: boolean;
    nav?: boolean;
    numberButton?: boolean
    submit?: boolean
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

export type TabElementProps = {
    theme?: typeof theme;
    centeredView?: boolean;
    modalView?: boolean;
} & ViewProps;
