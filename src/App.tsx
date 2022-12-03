import { QueryClientProvider, QueryClient } from "react-query";

import Dashboard from "@/pages/Dashboard";

import "./App.css";

const client = new QueryClient();



function App() {
  return (
    <QueryClientProvider client={client}>
      <Dashboard></Dashboard>
    </QueryClientProvider>
  );
}

export default App;
