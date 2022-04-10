import React from 'react';
import {Text} from "react-native";
import {ErrorTextProps} from "../types/componentsProps";

const ErrorText: React.FC<ErrorTextProps> = ({text}) => {
    return (
        <Text style={{ fontSize: 10, color: "red" }}>{text}</Text>
    );
};

export default ErrorText;