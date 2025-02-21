"use client";
import { createContext, useContext, useState } from "react";

// Create Context
export const ToggleContext = createContext({
  isSidebarOpen: false,
  toggle: () => {},
});

// Provider Component
const ToggleProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggle = () => {
    setIsSidebarOpen((prev) => !prev); // ✅ Corrected function name
  };

  return (
    <ToggleContext.Provider value={{ isSidebarOpen, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleProvider;

// Custom Hook for easier usage
export const useToggle = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return context;
};
