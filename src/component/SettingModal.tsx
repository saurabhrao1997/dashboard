
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../Context/ThemeContext";

const THEME_COLORS = [
  "#e11d48",
  "#22c55e",
  "#3b82f6",
  "#14b8a6",
  "#fb923c",
  "#ec4899",
];

export default function SettingsPanel() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { theme, toggleTheme, setPrimary, primary } = useTheme();

  // close outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50">
      
      {/* ⚙️ Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-black text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        ⚙️
      </button>

      {/* 🧩 Floating Modal */}
      {open && (
        <div
          ref={ref}
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 w-[300px] bg-[#1e293b] text-white p-6 rounded-xl shadow-2xl"
        >
          <h2 className="text-lg font-semibold mb-6">
            Sidebar Settings
          </h2>

          {/* 🎨 Colors */}
          <p className="mb-2">Select Color</p>
          <div className="flex gap-3 mb-6">
            {THEME_COLORS.map((c) => (
              <div
                key={c}
                onClick={() => setPrimary(c)}
                className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                  primary === c
                    ? "border-white scale-110"
                    : "border-transparent"
                }`}
                style={{ background: c }}
              />
            ))}
          </div>

          {/* 🌙 Theme */}
          <p className="mb-2">Theme</p>
          <button
            onClick={toggleTheme}
            className="w-full py-2 mb-6 bg-gray-700 rounded"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>

          {/* Buttons */}
          <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded mb-3">
            Buy for $59
          </button>

          <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded">
            Free Version
          </button>
        </div>
      )}
    </div>
  );
}