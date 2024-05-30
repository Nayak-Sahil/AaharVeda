import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation({ label, link, icon, newClass }) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-3 py-3 ${
          isActive ? "bg-muted text-primary" : "text-muted-foreground"
        } transition-all ${
          label == "Log Out" ? "hover:text-red-400" : "hover:text-primary"
        } ${newClass}`
      }
      end
    >
      {icon}
      {label}
    </NavLink>
  );
}
