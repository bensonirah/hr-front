import { Box, Divider, Stack, Text } from "@chakra-ui/react";
import { SkillProp } from "../data/skills";

export default function SkillsComponent({ skills }: SkillProp) {
  return (
    <Box>
      <Text fontWeight="semibold">
        TRAIKEFA IVELAN'NY MAHA MPIOMANA MPITANDRINA
      </Text>
      <Stack spacing={5} py={5}>
        {skills.map((skill, index) => {
          return (
            <Box key={index} boxShadow="md" rounded="md" p={5}>
              <Text as="h2" fontWeight="bold">
                {skill.label}
              </Text>
              <Divider />
              <Text>{skill.placeholder}</Text>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
