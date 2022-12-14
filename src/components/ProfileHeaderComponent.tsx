import { DownloadIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";

export default function ProfileHeaderComponent() {
  return (
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
          <Spacer />
          <HStack>
            <Button size="sm" variant="outline" leftIcon={<DownloadIcon />}>
              Export
            </Button>
            <Button size="sm" variant="outline" leftIcon={<EditIcon />}>
              Upload
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}
