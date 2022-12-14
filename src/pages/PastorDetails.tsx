import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Divider,
  Flex,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import SkillsComponent from "../components/SkillsComponent";
import { skills } from "../data/skills";
import { FaFacebook } from "react-icons/fa";
import ProfileHeaderComponent from "../components/ProfileHeaderComponent";
import { InputComponent } from "../components/InputComponent";
import { InputGroupComponent } from "../components/InputGroupComponent";

export default function PastorDetails() {
  const { pastorId } = useParams();
  useEffect(() => {
    console.log(`show pastor details of id:${pastorId}`);
  }, []);

  return (
    <Flex direction="column">
      <ProfileHeaderComponent />
      <Flex justifyContent="space-between" pt={10}>
        <Container>
          <VStack spacing={5}>
            <Box w="100%">
              <Text fontWeight="semibold">NY FIANARANA ETO AMIN'NY TPM</Text>
              <Stack spacing={5} py={5}>
                <InputComponent label="Andiany" type="text" />
                <HStack>
                  {[
                    { label: "Taona nidirana", type: "date" },
                    { label: "Taona nhivohana", type: "date" },
                  ].map((el, index) => (
                    <InputComponent
                      key={index}
                      label={el.label}
                      type={el.type}
                    />
                  ))}
                </HStack>
                <HStack>
                  {[
                    { label: "Fiangonana ivavahana", type: "text" },
                    { label: "Fiangonana nanolotra", type: "text" },
                  ].map((el, index) => (
                    <InputComponent
                      key={index}
                      label={el.label}
                      type={el.type}
                    />
                  ))}
                </HStack>
                <InputComponent label="S.P. Niaviana" type="text" />
              </Stack>
            </Box>
            <Divider />
            <Box w="100%">
              <Text fontWeight="semibold">NY MOMBAMOMBA</Text>
              <Stack spacing={3} py={5}>
                <HStack>
                  {[
                    { label: "Anarana", type: "text" },
                    { label: "Fanampiny", type: "text" },
                  ].map((el, index) => (
                    <InputComponent
                      key={index}
                      label={el.label}
                      type={el.type}
                    />
                  ))}
                </HStack>
                <InputComponent label="Daty nahaterahana" type="date" />
                <HStack>
                  <InputGroupComponent
                    label="Laharana finday"
                    type="tel"
                    children={<PhoneIcon />}
                  />
                  <InputGroupComponent
                    label="Adiresy mailaka"
                    type="email"
                    children={<EmailIcon />}
                  />
                </HStack>
                <InputGroupComponent
                  label="Facebook"
                  type="text"
                  placeholder="https://web.facebook.com/you.user-name"
                  children={<FaFacebook />}
                />
                <InputComponent label="Fonenana" type="text" />
                <Flex>
                  <FormLabel>Manambady ve?</FormLabel>
                  <Spacer />
                  <RadioGroup defaultValue="1">
                    <Stack direction="row">
                      <Radio value="1">Eny</Radio>
                      <Radio value="2">Tsia</Radio>
                    </Stack>
                  </RadioGroup>
                </Flex>
                <InputComponent label="Anaran'ny vady" type="text" />
                <HStack>
                  <InputGroupComponent
                    label="Laharana finday"
                    type="tel"
                    placeholder="Phone number"
                    children={<PhoneIcon color="gray.300" />}
                  />
                  <InputGroupComponent
                    label="Adiresy mailaka"
                    type="email"
                    placeholder="you@domain.com"
                    children={<EmailIcon color="gray.300" />}
                  />
                </HStack>
                <InputGroupComponent
                  label="Facebok"
                  type="text"
                  placeholder="https://web.facebook.com/your.user-name"
                  children={<FaFacebook />}
                />
                <Flex>
                  <FormLabel>Mananjanaka ve?</FormLabel>
                  <Spacer />
                  <RadioGroup defaultValue="1">
                    <Stack direction="row">
                      <Radio value="1">Eny</Radio>
                      <Radio value="2">Tsia</Radio>
                    </Stack>
                  </RadioGroup>
                </Flex>
                <Stack>
                  <HStack>
                    {[
                      { label: "Anaran'ny zanaka", type: "text" },
                      { label: "Daty nahaterahana", type: "date" },
                    ].map((inputElement, index) => (
                      <InputComponent
                        key={index}
                        label={inputElement.label}
                        type={inputElement.type}
                      />
                    ))}
                  </HStack>
                </Stack>
              </Stack>
            </Box>
          </VStack>
        </Container>
        <Container>
          <SkillsComponent skills={skills} />
        </Container>
      </Flex>
    </Flex>
  );
}
