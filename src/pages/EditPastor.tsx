import {
    Box,
    Button, ButtonGroup,
    Center,
    Container,
    Divider,
    Flex,
    Heading,
    HStack,
    Image,
    Spacer,
    Text,
    VStack
} from "@chakra-ui/react";
import {DownloadIcon, EditIcon} from "@chakra-ui/icons";
import {TPMForm} from "../components/TPMForm";
import {InfoPersoForm} from "../components/InfoPersoForm";
import {SkillForm} from "../components/SkillForm";
import React, {useEffect} from "react";
import {useNavigate, useParams} from 'react-router-dom';

export default function EditPastor() {
    const navigate = useNavigate();
    const {pastorId} = useParams();

    useEffect(() => {
        console.log(`show pastor details of id:${pastorId}`);
    }, [])

    return (
        <Flex direction="column">
            <Box pos="relative">
                <Box
                    w="100%"
                    h="200px"
                    borderTopLeftRadius="lg"
                    borderTopRightRadius="lg"
                    bgGradient="linear(to-r, green.200, pink.500)"
                />
                <Box pos="absolute" bottom={5} left={20} px={5}>
                    <Image
                        borderRadius="full"
                        borderWidth="5px"
                        borderColor="red"
                        src="https://bit.ly/dan-abramov"
                        boxSize="150px"
                        objectFit="cover"
                        alt="Dan Abramov"
                    />
                    {/*<SkeletonCircle size="150px" />*/}
                </Box>
                <Box bg="#0e1c36" w="100%" p={4} h={100}>
                    <Flex>
                        <Box pl={250}>
                            <Heading as="h4" fontWeight="semibold" fontSize="lg">
                                User name
                            </Heading>
                            <Text as="span" fontSize="sm" color="gray.600">
                                Description
                            </Text>
                        </Box>
                        <Spacer/>
                        <HStack>
                            <Button size="sm" variant="outline" leftIcon={<DownloadIcon/>}>
                                Export
                            </Button>
                            <Button size="sm" variant="outline" leftIcon={<EditIcon/>}>
                                Upload
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Box>
            <Flex justifyContent="space-between" pt={10}>
                <Container>
                    <VStack spacing={5}>
                        <TPMForm/>
                        <Divider/>
                        <InfoPersoForm/>
                    </VStack>
                </Container>
                <Container>
                    <SkillForm/>
                </Container>
            </Flex>
            <Center py={10}>
                <ButtonGroup gap="10">
                    <Button colorScheme="green" size="lg" variant="outline" onClick={() => navigate('/')}>
                        Annuler
                    </Button>
                    <Button colorScheme="teal" size="lg" variant="outline">
                        Modifier
                    </Button>
                </ButtonGroup>
            </Center>
        </Flex>
    );
}