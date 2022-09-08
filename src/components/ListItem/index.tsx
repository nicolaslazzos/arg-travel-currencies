
import React from "react";
import { Container, Box, Stack, IBoxProps, HStack, VStack } from "native-base";

import { Card } from '../Card';
import { Text, TextProps } from '../Text';

export interface CardProps extends IBoxProps {
  title?: string;
  subtitle?: string;
  rightTitle?: string;
  rightSubtitle?: string;
  titleProps?: Partial<TextProps>;
  subtitleProps?: Partial<TextProps>;
  rightTitleProps?: Partial<TextProps>;
  rightSubtitleProps?: Partial<TextProps>;
}

export const ListItem: React.FC<CardProps> = (props) => {
  const { title, subtitle, rightTitle, rightSubtitle } = props;

  return (
    <Card marginBottom={3}>
      <HStack>
        <VStack flex={1} alignItems="flex-start">
          <Text variant="title" {...props.titleProps}>{title}</Text>
          <Text variant="subtitle" {...props.subtitleProps}>{subtitle}</Text>
        </VStack>
        <VStack flex={1} alignItems="flex-end">
          <Text variant="title" {...props.rightTitleProps}>{rightTitle}</Text>
          <Text variant="subtitle" {...props.rightSubtitleProps}>{rightSubtitle}</Text>
        </VStack>
      </HStack>
    </Card>
  );
};