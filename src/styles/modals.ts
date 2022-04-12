import styled from "@emotion/native";
import React from "react";
import { InputElementProps } from "../types/elementsProps";

export const Modal: React.FC<InputElementProps> = styled.Modal`
  ${(props) =>
    props.centeredView &&
    `
    margin-bottom: ${props.theme.Input.addTransaction.marginBottom};
    height: ${props.theme.Input.addTransaction.height};
    width: ${props.theme.Input.addTransaction.width};
    font-size: ${props.theme.Input.addTransaction.fontSize};
    padding-left: ${props.theme.Input.addTransaction.paddingLeft};
  `}
`;
