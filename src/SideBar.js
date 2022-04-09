import React from "react";

export const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-16 h-screen bg-gray-900 flex flex-col text-white shadow">
    <SidebarIcon icon={}  />
    </div>
  );
};


const SidebarIcon =({icon})=>{
    return(
<div className="sidebar-icon">
{icon}
</div>
    )
}