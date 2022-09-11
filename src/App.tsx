import Router from './routes';
import { GlobalStyle } from '@styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
