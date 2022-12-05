import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import PastoralTable from "./components/PastoralTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboardLayout from "./layouts/AdminDashboardLayout";
import AdminPageNotFound from "./pages/AdminPageNotFound";
import PastorDetails from "./pages/PastorDetails";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AdminDashboardLayout />}>
            <Route index element={<PastoralTable />} />
            <Route path="pastors" element={<PastoralTable />} />
            <Route path="pastors/:pastorId" element={<PastorDetails />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<AdminPageNotFound />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
