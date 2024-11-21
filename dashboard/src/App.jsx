import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Repair from "./pages/Repair";
import Analytics from "./pages/Analytics";
import Client from "./pages/Client";
import Chat from "./pages/Chat";
import Setting from "./pages/Setting";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="repair" element={<Repair />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="client" element={<Client />} />
        <Route path="chat" element={<Chat />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
    </div>
  );
};

export default App;
