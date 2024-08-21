import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/auth.service';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { Box, ChakraProvider, Button, Text, HStack,VStack, Input,
} from '@chakra-ui/react';
import MenuLateral from '../components/MenuLateral';

function Root() {
  return (
    <AuthProvider>
      <PageRoot />
    </AuthProvider>
  );
}

function PageRoot() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  //const { user } = useAuth();

  return (
    <ChakraProvider>
    <HStack backgroundColor={"#EEEEEE"}>
      <Box backgroundColor={"#201E43"} width={"10%"}>
        <MenuLateral />
      </Box>
      <VStack width={"90%"} display={"flex"} flexDirection={"column"} alignSelf={"start"}>
        <HStack backgroundColor={"white"} width={"100%"} display={"flex"} flexDirection={"row"} justifyContent={"end"}>
          <Button alignSelf={"center"} color={"#201E43"}>Buscar:</Button>
          <Input placeholder="Buscar" width={"30%"} alignSelf={"center"} backgroundColor={"#F7F7F8"}/>
          <Box width={"25%"}></Box>
          <Button onClick={handleLogout} color={"#201E43"}>Cerrar Sesion</Button>  
        </HStack>
        <Outlet />
      </VStack>
    </HStack>
    </ChakraProvider>
  );
}

export default Root;