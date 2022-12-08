import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "styled-components";

import Dashboard from "@/Pages/Dashboard";
import Layout from "@/Common/Components/Layout";
import theme from "./Styled/Common/theme";


const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Dashboard></Dashboard>
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
