import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

export function TPMForm() {
  return (
    <>
      <Box w="100%">
        <Text fontWeight="semibold">NY FIANARANA ETO AMIN'NY TPM</Text>
        <Stack spacing={5} py={5}>
          <FormControl>
            <FormLabel>Andiany</FormLabel>
            <Input size="sm" type="text" />
          </FormControl>
          <HStack>
            <FormControl>
              <FormLabel>Taona nidirana</FormLabel>
              <Input size="sm" type="date" />
            </FormControl>
            <FormControl>
              <FormLabel>Taona hivohana</FormLabel>
              <Input size="sm" type="date" />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>Fiangonana ivavahana</FormLabel>
              <Input size="sm" type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Fiangonana nanolotra</FormLabel>
              <Input type="text" size="sm" />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>S.P. Niaviana</FormLabel>
            <Input size="sm" type="text" />
          </FormControl>
        </Stack>
      </Box>
    </>
  );
}
