import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import Layout from 'layout/layout';

const theme = createTheme({
  palette: {
    primary: { main: "#005B96" },
    secondary: { main: "#1BC5BD" },
    info: { main: '#CDCCCC' }
  }
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <QueryClientProvider client={queryClient}>
            <Layout />
          </QueryClientProvider>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
