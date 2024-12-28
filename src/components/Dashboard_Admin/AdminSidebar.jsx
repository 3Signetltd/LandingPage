import React, { useState, useEffect, useRef } from "react";
import { HiOutlineLogout, HiMenu, HiX } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { VscDashboard } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useNavigate, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Create a ref for the sidebar
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarLinks = [
    { path: "/", icon: FaHome, label: "Home" },
    {
      path: "/DashBoard/Admin_Dashboard",
      icon: VscDashboard,
      label: "Dashboard",
    },
    {
      path: "/DashBoard/Admin/CommunityUserList",
      icon: IoMdNotificationsOutline,
      label: "Registered Class Users",
    },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-white shadow-md p-4 flex items-center justify-between ${
          isSmallScreen ? "" : "hidden"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="text-purple-600 p-2 rounded-md focus:outline-none"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-blue text-white transition-all duration-300 ease-in-out transform 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          ${isSmallScreen ? "top-16" : "top-0"}`}
      >
        <div className="flex flex-col h-full">
          <div className="p-5">
            <h1 className="text-2xl font-bold mb-1">3signet</h1>
            <p className="text-sm text-purple-300 mb-6">Administrator</p>
            {!isSmallScreen && (
              <div className="flex items-center">
                <span className="mb-1 mr-2 font-extralight text-xs">
                  {/* Replace with actual profile data */}
                  {"Guest"}
                </span>
              </div>
            )}
          </div>

          <nav className="flex-grow overflow-y-auto">
            {sidebarLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => isSmallScreen && setIsOpen(false)}
                className={`flex items-center px-5 py-3 text-sm ${
                  location.pathname === link.path
                    ? "bg-blue-500"
                    : "hover:bg-blue-600"
                }`}
              >
                <link.icon className="w-5 h-5 mr-3" />
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="p-5">
            <button
              // onClick={handleLogout}
              className="w-full flex items-center px-1 py-1 text-sm bg-red-50 hover:text-white text-red-700 rounded-md hover:bg-red-700 transition-colors"
            >
              <HiOutlineLogout className="w-5 h-5 mr-3" />
              <span>Sign out</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          isOpen && !isSmallScreen ? "ml-64" : "ml-0"
        }`}
      ></div>
    </>
  );
};

export default AdminSidebar;
