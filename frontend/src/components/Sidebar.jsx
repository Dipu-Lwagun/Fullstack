import React, { Children, useState } from "react";
import { GiAutoRepair } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdOutlineNotifications } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";

const Sidebar = ({ Children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const manuItem = [
    {
      path: "/",
      name: "Home",
      icon: <IoHomeOutline />,
    },
    {
      path: "repair",
      name: "Repair",
      icon: <GiAutoRepair />,
    },
    {
      path: "profile",
      name: "Profile",
      icon: <FaRegUser />,
    },
    {
      path: "notification",
      name: "Notification",
      icon: <MdOutlineNotifications />,
    },
    {
      path: "chat",
      name: "Chat",
      icon: <IoChatboxEllipsesOutline />,
    },
    {
      path: "setting",
      name: "Setting",
      icon: <MdOutlineSettings />,
    },
  ];
  return (
    <div className="flex gap-6">
      <div
        style={{ width: isOpen ? "250px" : "60px" }}
        className="bg-slate-900 w-[250px] h-[100vh] rounded-r-[20px]  text-white"
      >
        <div className=" flex items-center p-5 justify-between mx-5 gap-9 ">
          <p
            style={{ display: isOpen ? "block" : "none" }}
            className="text-4xl font-semibold leading-4"
          >
            logo
          </p>
          <div
            style={{ marginLeft: isOpen ? "0px" : "-23px" }}
            className="text-2xl leading-4 font-semibold "
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {/* this for line */}
        <div className="flex items-center justify-center m-2">
          <p className="h-1 w-[300px]  bg-slate-500 rounded-full"></p>
        </div>

        {manuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              `flex items-center gap-4 text-2xl p-4 mt-3 transition duration-200 ease-in-out 
                ${
                  isActive
                    ? "bg-emerald-200 text-stone-900"
                    : "hover:bg-emerald-200 hover:text-stone-900"
                }`
            }
          >
            <div className="text-3xl">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }}>
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main className=" p-4">{Children}</main>
    </div>
  );
};

export default Sidebar;
