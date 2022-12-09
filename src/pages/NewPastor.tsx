import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function NewPastor() {
  // https://dribbble.com/shots/16701574-Profile-Settings
  return (
    <>
      <Container>
        <VStack w="100%" spacing={5}>
          <Heading>New pastor</Heading>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Text>FIANARANA ETO AMIN'NY TPM</Text>
          <Divider />
          <Input variant="flushed" placeholder="Promotion" />
          <FormControl>
            <FormLabel>Date debut:</FormLabel>
            <Input type="date" variant="flushed" />
          </FormControl>
          <FormControl>
            <FormLabel>Date fin:</FormLabel>
            <Input type="date" variant="flushed" />
          </FormControl>
          <Input variant="flushed" placeholder="Fiangonana Ivavahana" />
          <Input variant="flushed" placeholder="Fiangonana Nanolotra" />
          <Input variant="flushed" placeholder="S.P Niaviana" />
          <ButtonGroup>
            <Button>Add</Button>
            <Button>Cancel</Button>
          </ButtonGroup>
        </VStack>
      </Container>
    </>
  );
}
