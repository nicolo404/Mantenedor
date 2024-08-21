import { VStack, Text, Flex, Button, useDisclosure, Drawer, DrawerOverlay, DrawerContent 
    , DrawerCloseButton, DrawerHeader, DrawerBody,
} from "@chakra-ui/react";

const MenuLateral = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} display={["flex", "none"]}>
        Abrir menú
      </Button>
      <Flex
        as="nav"
        direction="column"
        align="start"
        bg="gray.800"
        color="gray.200"
        p={6}
        borderRight="1px solid gray.700"
        display={["none", "flex"]}
        w={["full", "auto"]}
      >
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Menú lateral
        </Text>
        <VStack spacing={4} align="start" w="full">
          <Flex
            as="a"
            href="#"
            align="center"
            _hover={{ color: "gray.400" }}
            transition="color 0.2s"
          >
          </Flex>
          <Flex
            as="a"
            href="#"
            align="center"
            _hover={{ color: "gray.400" }}
            transition="color 0.2s"
          >
            <Text ml={4}>Usuarios</Text>
          </Flex>
          <Flex
            as="a"
            href="#"
            align="center"
            _hover={{ color: "gray.400" }}
            transition="color 0.2s"
          >
            <Text ml={4}>Información 1</Text>
          </Flex>
          <Flex
            as="a"
            href="#"
            align="center"
            _hover={{ color: "gray.400" }}
            transition="color 0.2s"
          >
            <Text ml={4}>Información 2</Text>
          </Flex>
          <Flex
            as="a"
            href="#"
            align="center"
            _hover={{ color: "gray.400" }}
            transition="color 0.2s"
          >
            <Text ml={4}>Información 3</Text>
          </Flex>
        </VStack>
      </Flex>

      {/* Drawer para pantallas pequeñas */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menú</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start">
              {/* Opciones del menú */}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuLateral;