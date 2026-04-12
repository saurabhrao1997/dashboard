import { useEffect, useRef, useState } from "react";

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle on profile click
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event :{target :unknown}) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      
      {/* Profile Image */}
      <img
        src="https://i.pravatar.cc/40"
        alt="profile"
        onClick={handleToggle}
        className="w-8 h-8 rounded-full cursor-pointer"
      />

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-600 rounded-lg shadow-lg py-2">
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
            Profile
          </button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
            Settings
          </button>
          <div className="border-t my-2"></div>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 ">
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;