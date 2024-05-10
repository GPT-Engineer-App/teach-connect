import { Box, Button, Container, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to EduConnect
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Your ultimate destination for online tutoring and learning.
        </Text>
        <Image src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb258ZW58MHx8fHwxNzE1MzU1NTQ3fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
      </VStack>
      <Box py={10}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Our Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack spacing={4} p={5} boxShadow="md" borderRadius="md">
            <FaChalkboardTeacher size="3em" />
            <Text fontSize="lg" fontWeight="bold">
              Personal Tutoring
            </Text>
            <Text>Get personalized one-on-one tutoring sessions with certified tutors in a variety of subjects.</Text>
            <Button colorScheme="blue">Learn More</Button>
          </VStack>
          <VStack spacing={4} p={5} boxShadow="md" borderRadius="md">
            <FaUserGraduate size="3em" />
            <Text fontSize="lg" fontWeight="bold">
              Structured Courses
            </Text>
            <Text>Enroll in our comprehensive courses designed to take you from beginner to expert in your field of interest.</Text>
            <Button colorScheme="green">Explore Courses</Button>
          </VStack>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;
