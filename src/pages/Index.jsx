import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { FaHome, FaGlobe, FaBriefcase, FaChartLine, FaCommentDots, FaLaptop } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" display="flex" alignItems="center">
              <FaHome />
              <Text ml={2}>Home</Text>
            </Link>
            <Link href="#" display="flex" alignItems="center">
              <FaGlobe />
              <Text ml={2}>World</Text>
            </Link>
            <Link href="#" display="flex" alignItems="center">
              <FaBriefcase />
              <Text ml={2}>Business</Text>
            </Link>
            <Link href="#" display="flex" alignItems="center">
              <FaChartLine />
              <Text ml={2}>Markets</Text>
            </Link>
            <Link href="#" display="flex" alignItems="center">
              <FaCommentDots />
              <Text ml={2}>Opinion</Text>
            </Link>
            <Link href="#" display="flex" alignItems="center">
              <FaLaptop />
              <Text ml={2}>Tech</Text>
            </Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} py={8} px={8}>
        {/* Main Headline Section */}
        <Box flex="3" pr={{ md: 8 }}>
          <Heading size="xl" mb={4}>Main Headline: Breaking News</Heading>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading size="md" mb={4}>Other Articles</Heading>
          <VStack align="start" spacing={4}>
            <Link href="#">Article 1: Lorem ipsum dolor sit amet</Link>
            <Link href="#">Article 2: Consectetur adipiscing elit</Link>
            <Link href="#">Article 3: Sed do eiusmod tempor</Link>
            <Link href="#">Article 4: Incididunt ut labore et dolore</Link>
          </VStack>
        </Box>
      </Flex>

      <Divider />

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" px={8}>
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link href="#">Contact</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;