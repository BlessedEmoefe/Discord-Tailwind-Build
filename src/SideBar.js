import React from "react";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-16 h-screen bg-gray-900 flex flex-col text-white shadow">
      <SideBarIcon icon={<FaFire size="28" />} />
      {/* <Divider /> */}
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
      {/* <Divider /> */}
      <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

const SideBarIcon = ({ icon }) => {
  return <div className="sidebar-icon">{icon}</div>;
};
