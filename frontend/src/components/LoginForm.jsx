import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from '../services/auth.service';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  ChakraProvider,
  VStack,
  Image,
  HStack
} from '@chakra-ui/react';

function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data).then(() => {
      navigate('/');
    });
  };
  return (
    <ChakraProvider>
    <HStack height={"100vh"}>
    <VStack width={"50%"} >
    <Box as="form" onSubmit={handleSubmit(onSubmit)} width={"60%"}>
      <FormControl isInvalid={!!errors.email}>
        <FormLabel htmlFor="email" color={"#201E43"}>Email</FormLabel>
        <Input
          id="email"
          type="email"
          color={"#1E201E"}
          {...register('email', { required: 'Email is required' })}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.password}>
        <FormLabel htmlFor="password" color={"#201E43"}>Password</FormLabel>
        <Input
          marginBottom={"1.5em"}
          id="password"
          type="password"
          color={"#1E201E"}
          {...register('password', { required: 'Password is required' })}
        />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>
      <Button type="submit" backgroundColor={"#1E201E"} color={"white"} width={"40%"}>
        Entrar
      </Button>
    </Box>
    </VStack>
    <Box width={"50%"} height={"100%"} backgroundColor={"#EEEEEE"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Image src="/LOGO-MDS-CASINOS-200X106.png" height={"106px"} width={"200px"}/>
    </Box>
    </HStack> 
    </ChakraProvider>
  );
}
export default LoginForm;