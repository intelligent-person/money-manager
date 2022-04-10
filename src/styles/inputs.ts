import styled from "@emotion/native";
import React from "react";
import { InputElementProps } from "../types/elementsProps";

export const Input: React.FC<InputElementProps> = styled.TextInput`
  ${(props) =>
    props.addTransaction &&
    `
    margin-bottom: ${props.theme.Input.addTransaction.marginBottom};
    height: ${props.theme.Input.addTransaction.height};
    width: ${props.theme.Input.addTransaction.width};
    font-size: ${props.theme.Input.addTransaction.fontSize};
    padding-left: ${props.theme.Input.addTransaction.paddingLeft};
  `}
  ${(props) =>
    props.addCategory &&
    `
    height: ${props.theme.Input.addCategory.height};
    width: ${props.theme.Input.addCategory.width};
    font-size: ${props.theme.Input.addCategory.fontSize};
    padding-left: ${props.theme.Input.addCategory.paddingLeft};
  `}
`;
