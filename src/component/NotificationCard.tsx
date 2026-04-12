import { Activity } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NotificationPopover = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const notifications = [
    "Mike John responded to your email",
    "You have 5 more tasks",
    "Your friend Michael is in town",
    "Another notification",
    "Another one"
  ];

  const toggle = () => setOpen((prev) => !prev);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      
      {/* Notification Icon */}
      <div
        onClick={toggle}
        className="cursor-pointer relative"
      >
        <Activity />
        <span className="absolute top-0 right-0 w-2 h-2 bg-pink-500 rounded-full"></span>
      </div>

      {/* Popover */}
      {open && (
        <div className="absolute right-0 mt-3 w-72 bg-white rounded-lg shadow-lg p-4">
          
          {/* Arrow */}
          <div className="absolute -top-2 right-6 w-4 h-4 bg-white rotate-45"></div>

          {/* Notifications */}
          <div className="space-y-3 text-gray-600 text-sm">
            {notifications.map((item, i) => (
              <p key={i} className="hover:text-black cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationPopover;