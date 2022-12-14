import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

export function SkillForm() {
  return (
    <Box>
      <Text fontWeight="semibold">
        TRAIKEFA IVELAN'NY MAHA MPIOMANA MPITANDRINA
      </Text>
      <Stack spacing={5} py={5}>
        <FormControl>
          <FormLabel>Diplaoma ananana</FormLabel>
          <Textarea size="sm" placeholder="Here is a sample placeholder" />
        </FormControl>
        <FormControl>
          <FormLabel>Fianarana nijanonana</FormLabel>
          <Textarea size="sm" placeholder="Here is a sample placeholder" />
        </FormControl>
        <FormControl>
          <FormLabel>Asa efa natao</FormLabel>
          <Textarea size="sm" placeholder="Here is a sample placeholder" />
        </FormControl>
        <FormControl>
          <FormLabel>Asa hay</FormLabel>
          <Textarea size="sm" placeholder="Here is a sample placeholder" />
        </FormControl>
        <FormControl>
          <FormLabel>Fianarana nataon'ny vady</FormLabel>
          <Textarea size="sm" placeholder="Here is a sample placeholder" />
        </FormControl>
        <FormControl>
          <FormLabel>Diplaoma ananan'ny vady</FormLabel>
          <Textarea size="sm" placeholder="Here is a sample placeholder" />
        </FormControl>
        <FormControl>
          <FormLabel>Fianarana nijanonan'ny vady</FormLabel>
          <Textarea size="sm" placeholder="Here is a sample placeholder" />
        </FormControl>
        <FormControl>
          <FormLabel>Asa hain'ny vady</FormLabel>
          <Textarea size="sm" placeholder="Here is a sample placeholder" />
        </FormControl>
      </Stack>
    </Box>
  );
}
