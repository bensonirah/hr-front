import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Heading, HStack, VStack } from "@chakra-ui/react";

export default function PastorDetails() {
  const navigate = useNavigate();
  const { pastorId } = useParams();
  return (
    <>
      <Container p={10}>
        <Heading>Pastor details</Heading>
        <VStack>
          <p>Show pastor's details of id: {pastorId}</p>
          <Button onClick={() => navigate(-1)}>Go back</Button>
        </VStack>
      </Container>
    </>
  );
}
