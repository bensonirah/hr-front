import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FC } from "react";
import { InputInterface } from "../props/InputInterface";

export const InputComponent: FC<InputInterface> = ({
  label,
  type,
  placeholder,
}) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input size="sm" type={type} placeholder={placeholder} />
    </FormControl>
  );
};
