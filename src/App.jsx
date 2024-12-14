import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/Home";

import AdminLayout from "./components/Dashboard_Admin/AdminLayout";
import AdminDashboard from "./pages/AdminDashBoardPages/AdminDashboard";
import CommunityUserList from "./pages/AdminDashBoardPages/CommunityUserList";
import "./index.css";

const AppContent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Admin Dashboard routes */}
        <Route element={<AdminLayout />}>
          <Route
            path="/DashBoard/Admin_Dashboard"
            element={<AdminDashboard />}
          />
          <Route
            path="/DashBoard/Admin/CommunityUserList"
            element={<CommunityUserList />}
          />
        </Route>
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
