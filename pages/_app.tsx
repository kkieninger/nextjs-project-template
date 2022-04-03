import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import styles from '@app/styles';

// React Query setup
const queryClient = new QueryClient();

// Chakra UI setup
const theme = extendTheme({ styles });

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
