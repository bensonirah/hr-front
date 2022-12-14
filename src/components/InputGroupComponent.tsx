import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FC } from "react";
import { InputInterface } from "../props/InputInterface";

export const InputGroupComponent: FC<InputInterface> = ({
  label,
  type,
  placeholder,
  ...rest
}) => {
  const { children } = rest;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <InputGroup size="md">
        <InputLeftElement pointerEvents="none" children={children} />
        <Input type={type} placeholder={placeholder} />
      </InputGroup>
    </FormControl>
  );
};
