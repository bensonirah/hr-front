import {
    AddIcon,
    DeleteIcon,
    EditIcon,
    ExternalLinkIcon,
    ViewIcon,
} from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";
import {
    Box,
    Button,
    ButtonGroup,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import {faker} from "@faker-js/faker";

interface PastoralView {
    uuid: string;
    fullname: string;
    tel: string;
    mail: string;
    facebook: string;
    adresse: string;
    isMaried: boolean;
    hasChild: boolean;
    urlDetail: string
}

const fbBaseUrl = "https://web.facebook.com/";
const createPastoral = (): PastoralView => {
    const userName = faker.internet.userName();
    const uuid = faker.random.alphaNumeric(14);
    return {
        uuid: uuid,
        fullname: faker.name.fullName(),
        adresse: faker.address.city(),
        facebook: `${fbBaseUrl}${userName}`,
        mail: faker.internet.email(),
        tel: faker.phone.number(),
        hasChild: false,
        isMaried: true,
        urlDetail: `/pastors/${uuid}/edit`
    };
};
const fbCut = (url: string) => url.replace(fbBaseUrl, "");
const PastoralItems: Array<PastoralView> = Array.from({length: 10}).map(() =>
    createPastoral()
);

export default function PastoralTable() {
    const navigate = useNavigate();
    const navigateTo = (path: string) => {
        navigate(path);
    };
    return (
        <>
            <Box w="100%" px={10} py={10}>
                <HStack mb={10}>
                    <Button
                        colorScheme="blue"
                        size="sm"
                        onClick={() => navigate("/new-pastor")}
                    >
                        <AddIcon mr={2}/> New pastor
                    </Button>
                    <InputGroup size="md">
                        <Input variant="filled" pr="4.5rem" placeholder="Enter keyword"/>
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm">
                                Search
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </HStack>
                <TableContainer>
                    <Table size="sm">
                        <Thead>
                            <Tr>
                                <Th>Fullname</Th>
                                <Th>Tel</Th>
                                <Th>Mail</Th>
                                <Th>Facebook</Th>
                                <Th>Adresse</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {PastoralItems.map((p, k) => (
                                <Tr key={k}>
                                    <Td>{p.fullname}</Td>
                                    <Td>{p.tel}</Td>
                                    <Td>{p.mail}</Td>
                                    <Td>
                                        <Link href={p.facebook} isExternal>
                                            {fbCut(p.facebook)}
                                            <ExternalLinkIcon mx="2px"/>
                                        </Link>
                                    </Td>
                                    <Td>{p.adresse}</Td>
                                    <Td>
                                        <ButtonGroup spacing="2">
                                            <Button size="xs" colorScheme="blue"
                                                    onClick={() => navigateTo(p.urlDetail)}>
                                                <EditIcon color="white"/>
                                            </Button>
                                            <Button size="xs" colorScheme="red">
                                                <DeleteIcon color="white"/>
                                            </Button>

                                            <Button
                                                size="xs"
                                                onClick={(e) => navigateTo(`/pastors/${p.uuid}`)}
                                            >
                                                <ViewIcon/>
                                            </Button>
                                        </ButtonGroup>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}
