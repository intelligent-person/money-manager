import styled from "@emotion/native";
import React from "react";
import {TouchableHighlightElementProps, TouchableOpacityElementProps} from "../types/elementsProps";

export const TouchableHighlight: React.FC<TouchableHighlightElementProps> = styled.TouchableHighlight`

  ${(props) =>
    props.category &&
    `
    shadow-color: ${props.theme.TouchableHighlight.category.shadowColor};
    background-color: ${props.theme.TouchableHighlight.category.backgroundColor};
    border-radius: ${props.theme.TouchableHighlight.category.borderRadius};
    elevation: ${props.theme.TouchableHighlight.category.elevation};
    width: ${props.theme.TouchableHighlight.category.width};
    height: ${props.theme.TouchableHighlight.category.height};
    align-items: ${props.theme.TouchableHighlight.category.alignItems};
    justify-content: ${props.theme.TouchableHighlight.category.justifyContent};
  `}
  
  ${(props) =>
    props.numberButton &&
    `
    shadow-color: ${props.theme.TouchableHighlight.category.shadowColor};
    background-color: ${props.theme.TouchableHighlight.category.backgroundColor};
    border-radius: ${props.theme.TouchableHighlight.category.borderRadius};
    elevation: ${props.theme.TouchableHighlight.category.elevation};
    width: ${props.theme.TouchableHighlight.category.width};
    height: ${props.theme.TouchableHighlight.category.height};
    align-items: ${props.theme.TouchableHighlight.category.alignItems};
    justify-content: ${props.theme.TouchableHighlight.category.justifyContent};
    margin-bottom: ${props.theme.TouchableHighlight.numberButton.marginBottom};
    border-color: ${props.theme.TouchableHighlight.numberButton.borderColor};
    border-width: ${props.theme.TouchableHighlight.numberButton.borderWidth};
  `}
  
  ${(props) =>
    props.addAmount &&
    `
    shadow-color: ${props.theme.TouchableHighlight.addAmount.shadowColor};
    margin-top: ${props.theme.TouchableHighlight.addAmount.marginTop};
    border-radius: ${props.theme.TouchableHighlight.addAmount.borderRadius};
    elevation: ${props.theme.TouchableHighlight.addAmount.elevation};
  `}
  
`;

export const TouchableOpacity: React.FC<TouchableOpacityElementProps> = styled.TouchableOpacity`

  ${(props) =>
    props.nav &&
    `
    alignItems: ${props.theme.TouchableHighlight.nav.alignItems};
    flex: ${props.theme.TouchableHighlight.nav.flex};
  `}
`

