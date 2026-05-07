"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || 
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle-collapsible">
      <div className="icon-wrapper">
        <Image 
          src={theme === "light" ? "/dark.svg" : "/light.svg"} 
          alt="toggle theme" 
          width={20} 
          height={20} 
        />
      </div>
      <span className="toggle-text">
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </span>
    </button>
  );
}