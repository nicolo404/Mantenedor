import { ChakraProvider } from '@chakra-ui/react';
import { useRouteError } from 'react-router-dom';
import {
  Box,
  Text,
} from '@chakra-ui/react';


const ErrorPage = () => {
  const error = useRouteError();

  /**
   * Este mensaje de error, está pensado para los desarrolladores.
   * En un entorno de producción, no se debería mostrar este mensaje o almenos
   * no de esta forma.
   */
  console.error({
    status: error.status,
    statusText: error.statusText,
    message: error.message ? error.message : 'No message',
  });

  return (
    <ChakraProvider>
      <Box>
        <Text>Oops!</Text>
        <p>Sorry, un error inesperado a ocurrido.</p>
      </Box>
    </ChakraProvider>
  );
};

export default ErrorPage;
