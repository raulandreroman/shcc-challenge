import { Heart } from '@/styles/icons';
import {
  Box,
  ChakraComponent,
  Flex,
  forwardRef,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { FunctionComponent } from 'react';

type Props = FunctionComponent<any>;

type Ref = ChakraComponent<'div', {}>;

export const MotionBox = motion.custom(
  forwardRef<Ref, Props>((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);

export const MotionStack = motion.custom(
  forwardRef<Ref, Props>((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Stack ref={ref} {...chakraProps} />;
  })
);

export const MotionFlex = motion.custom(
  forwardRef<Ref, Props>((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Flex ref={ref} {...chakraProps} />;
  })
);

export const MotionHeading = motion.custom(
  forwardRef<Ref, Props>((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Heading ref={ref} {...chakraProps} />;
  })
);

export const MotionHeart = motion.custom(
  forwardRef<Ref, Props>((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Heart ref={ref} {...chakraProps} />;
  })
);

export const MotionText = motion.custom(
  forwardRef<Ref, Props>((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Text ref={ref} {...chakraProps} />;
  })
);
