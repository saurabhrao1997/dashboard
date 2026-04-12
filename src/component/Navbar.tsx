


import { useSidebar } from "../Context/SideBarContext";
import NotificationPopover from "./NotificationCard";
import ProfileMenu from "./ProfileCard";
import SearchModal from "./SearchCard";

const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div>
      <div className="
        h-16 
        bg-white text-gray-800 
        dark:bg-[#1e1e2f] dark:text-white 
        flex items-center justify-between px-6 
        transition-colors duration-300 shadow
      ">
        
        {/* Left */}
        <div className="flex items-center gap-4">
          <button onClick={toggleSidebar} className="text-[30px]">
            ☰
          </button>
          <h1 className="text-lg font-light uppercase">
            Dashboard
          </h1>
        </div>

        {/* Right */}
        <div className="flex gap-6 items-center">
          <SearchModal />
          <NotificationPopover />
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;