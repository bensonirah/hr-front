import { AddIcon, DeleteIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaFacebook, FaMailBulk } from "react-icons/fa";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  HStack,
  Text,
  Flex,
  Spacer,
  ButtonGroup,
  Button,
  InputGroup,
  InputLeftElement,
  InputLeftAddon,
} from "@chakra-ui/react";

export function InfoPersoForm() {
  return (
    <Box w="100%">
      <Text fontWeight="semibold">NY MOMBAMOMBA</Text>
      <Stack spacing={3} py={5}>
        <HStack>
          <FormControl>
            <FormLabel>Anarana</FormLabel>
            <Input size="sm" type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Fanampiny</FormLabel>
            <Input size="sm" type="text" />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Daty nahaterahana</FormLabel>
          <Input size="sm" type="date" />
        </FormControl>
        <HStack>
          <FormControl>
            <FormLabel>Laharana finday</FormLabel>
            <InputGroup size="md">
              <InputLeftElement pointerEvents="none" children={<PhoneIcon />} />
              <Input type="tel" placeholder="Phone number" />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Adiresy mailaka</FormLabel>
            <InputGroup size="sm">
              <InputLeftElement pointerEvents="none" children={<EmailIcon />} />
              <Input type="email" placeholder="you@domain.com" />
            </InputGroup>
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Facebook</FormLabel>
          <InputGroup size="sm">
            <InputLeftElement pointerEvents="none" children={<FaFacebook />} />
            <Input
              type="text"
              placeholder="https://web.facebook.com/you.user-name"
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Fonenana</FormLabel>
          <Input size="sm" type="tex" />
        </FormControl>
        <Stack direction="row">
          <FormLabel>Manambady ve?</FormLabel>
          <RadioGroup defaultValue="1">
            <Stack direction="row">
              <Radio value="1">Eny</Radio>
              <Radio value="2">Tsia</Radio>
            </Stack>
          </RadioGroup>
        </Stack>
        <FormControl>
          <FormLabel>Anaran'ny vady</FormLabel>
          <Input size="sm" type="text" />
        </FormControl>
        <HStack>
          <FormControl>
            <FormLabel>Laharana finday</FormLabel>
            <InputGroup size="sm">
              <InputLeftElement
                pointerEvents="none"
                children={<PhoneIcon color="gray.300" />}
              />
              <Input type="tel" placeholder="Phone number" />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Adiresy mailaka</FormLabel>
            <InputGroup size="sm">
              <InputLeftElement pointerEvents="none" children={<EmailIcon />} />
              <Input type="email" placeholder="you@domain.com" />
            </InputGroup>
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Facebook</FormLabel>
          <InputGroup size="sm">
            <InputLeftElement children={<FaFacebook />} />
            <Input
              type="text"
              placeholder="https://web.facebook.com/your.user-name"
            />
          </InputGroup>
        </FormControl>
        <Stack direction="row">
          <FormLabel>Mananjanaka ve?</FormLabel>
          <RadioGroup defaultValue="1">
            <Stack direction="row">
              <Radio value="1">Eny</Radio>
              <Radio value="2">Tsia</Radio>
            </Stack>
          </RadioGroup>
        </Stack>
        <Stack>
          <HStack>
            <FormControl>
              <FormLabel>Anaran'ny zanaka</FormLabel>
              <Input size="sm" />
            </FormControl>
            <FormControl>
              <FormLabel>Daty nahaterahana</FormLabel>
              <Input size="sm" type="date" />
            </FormControl>
          </HStack>
          <Flex>
            <Spacer />
            <ButtonGroup gap={4}>
              <Button
                variant="outline"
                colorScheme="red"
                size="sm"
                leftIcon={<DeleteIcon />}
              >
                Supprimer
              </Button>
              <Button
                variant="outline"
                colorScheme="green"
                size="sm"
                leftIcon={<AddIcon />}
              >
                Ajouter
              </Button>
            </ButtonGroup>
          </Flex>
        </Stack>
      </Stack>
    </Box>
  );
}
