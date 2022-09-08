import React from "react";
import { StyleSheet } from "react-native";
import { Text as NText, ITextProps } from "native-base";

export interface TextProps extends ITextProps {
  variant?: "heading" | "title" | "subtitle" | "label" | "small" | "caption";
  text?: ITextProps["children"];
  status?: "error" | "success" | "warning" | "info";
}

export const Text: React.FC<TextProps> = ({ text, ...props }) => {
  return (
    <NText
      children={text}
      {...props}
      style={[variants[props.variant ?? 'title'], props.style]}
      variant={props.status ?? props.variant}
    />
  );
};

const variants = StyleSheet.create({
  heading: { fontSize: 18, fontWeight: "700" },
  title: { fontSize: 16, fontWeight: "500" },
  subtitle: { fontSize: 14, fontWeight: "400" },
  label: { fontSize: 14, marginBottom: 8 },
  small: { fontSize: 13 },
  caption: { fontSize: 13 },
});

export default Text;
