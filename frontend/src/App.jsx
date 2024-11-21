import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Repair from "./pages/Repair";
import Chat from "./pages/Chat";
import Notification from "./pages/Notification";
import Sidebar from "./components/Sidebar";
import Setting from "./pages/Setting";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="flex bg-slate-200">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="repair" element={<Repair />} />
        <Route path="chat" element={<Chat />} />
        <Route path="notification" element={<Notification />} />
        <Route path="setting" element={<Setting />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
