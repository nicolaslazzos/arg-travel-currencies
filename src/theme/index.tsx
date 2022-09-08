import React from "react";
import {
  NativeBaseProvider,
  NativeBaseProviderProps,
  ITextProps,
  IContainerProps,
  extendTheme,
  themeTools,
  theme as t,
} from "native-base";

export const theme = extendTheme({
  colors: {
    primary: { ...t.colors.green },
  },
  config: {
    initialColorMode: "dark",
  },
  components: {
    Container: {
      baseStyle: (props: IContainerProps) => {
        return {
          bg: themeTools.mode("white", "dark.100")(props),
          borderColor: themeTools.mode("white", "dark.100")(props),
          maxWidth: '100%',
          overflow: 'hidden',
          rounded: 'lg',
          p: 2
        };
      },
    },
    Button: {
      baseStyle: (props: IContainerProps) => {
        return {
          // bg: themeTools.mode("white", "dark.100")(props),
          // borderColor: themeTools.mode("muted.200", "gray.600")(props),
          // maxWidth: '100%',
          // overflow: 'hidden',
          // rounded: 'lg',
          // p: 2
        };
      },
    },
    Text: {
      baseStyle: (props: ITextProps) => {
        const variant = props.variant as string;

        let color: string = themeTools.mode("black", "white")(props);

        if (['subtitle', 'label', 'caption'].includes(variant)) {
          color = themeTools.mode("gray.400", "gray.400")(props);
        } else if (['success'].includes(variant)) {
          color = themeTools.mode("green.500", "green.500")(props);
        } else if (['error'].includes(variant)) {
          color = themeTools.mode("red.500", "red.500")(props);
        } else if (['warning'].includes(variant)) {
          color = themeTools.mode("yellow.500", "yellow.500")(props);
        } else if (['info'].includes(variant)) {
          color = themeTools.mode("blue.500", "blue.500")(props);
        }

        return {
          _light: { color },
          _dark: { color }
        };
      }
    }
  },
});

export interface ThemeProviderProps extends NativeBaseProviderProps { }

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  return <NativeBaseProvider theme={theme} {...props} />;
};

export default ThemeProvider;