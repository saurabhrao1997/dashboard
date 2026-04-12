

import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SearchModal = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const toggle = () => setOpen(true);
  const close = () => setOpen(false);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        close();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    if (open) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  return (
    <div>
      {/* Search Icon */}
      <button className="text-gray-700 dark:text-white text-xl" onClick={toggle}>
        <Search />
      </button>

      {/* Overlay */}
      {open && (
        <div className="
          fixed inset-0 
          bg-black/40 dark:bg-black/60 
          flex items-start justify-center 
          z-50 pt-20 transition-colors
        ">
          
          {/* Modal */}
          <div
            ref={modalRef}
            className="
              w-[600px] 
              bg-white text-gray-800 
              dark:bg-[#1e1e2f] dark:text-white 
              rounded-lg shadow-xl px-6 py-6 
              flex items-center justify-between 
              transition-colors duration-300
            "
          >
            <input
              type="text"
              placeholder="SEARCH"
              className="
                w-full outline-none text-lg 
                bg-transparent
                text-gray-700 placeholder-gray-400 
                dark:text-white dark:placeholder-gray-400
              "
              autoFocus
            />

            {/* Close Button */}
            <button
              onClick={close}
              className="
                ml-4 text-gray-400 
                hover:text-black 
                dark:hover:text-white 
                text-xl transition-colors
              "
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchModal;