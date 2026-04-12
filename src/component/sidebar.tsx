

// import {
//   ChartBar,
//   ClipboardType,
//   Hexagon,
//   Image,
//   LayoutDashboard,
//   Pin,
//   Sheet,
//   Wrench,
// } from "lucide-react";
// import { useRef, useState } from "react";
// import { useSidebar } from "../Context/SideBarContext";

// const Sidebar = () => {
//   const { isOpen, toggleSidebar } = useSidebar(); // 👈 IMPORTANT
//   const [isHovered, setIsHovered] = useState(false);
//   const timeoutRef = useRef<any>(null);

//   const isDesktop = window.innerWidth >= 768;

//   // 👉 Final state
//   const isSidebarOpen = isDesktop ? isOpen || isHovered : isOpen;

//   // 👉 Hover handlers (desktop only)
//   const handleMouseEnter = () => {
//     if (isDesktop) {
//       clearTimeout(timeoutRef.current);
//       setIsHovered(true);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (isDesktop) {
//       timeoutRef.current = setTimeout(() => {
//         setIsHovered(false);
//       }, 150);
//     }
//   };

//   return (
//     <>
//       {/* 🔲 Backdrop (mobile only) */}
//       {isOpen && !isDesktop && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40"
//           onClick={() => toggleSidebar()} // ✅ close on outside click
//         />
//       )}

//       {/* 📚 Sidebar */}
//       <div
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         className={`
//           top-16 left-0 z-50
//           ${isDesktop ? "fixed" : "fixed"}
//           ${!isOpen && !isDesktop ? "hidden" : ""}
//         `}
//       >
//         {/* Hover zone (desktop only) */}
//         {isDesktop && (
//           <div className="absolute top-0 left-0 h-full w-56" />
//         )}

//         <div
//           className={`
//             bg-(--primary) text-white transition-all duration-300 rounded-t-md ml-2
//             ${isSidebarOpen ? "w-56" : "w-16"}
//             h-[calc(100vh-64px)]
//             shadow-lg
//           `}
//         >
//           {/* Header */}
//           <div className="flex items-center mx-4 mt-4 border-b pb-4">
//             <img
//               src="https://demos.creative-tim.com/vue-black-dashboard-pro/img/icon-vue.png"
//               className={`${
//                 isSidebarOpen ? "w-12 h-12" : "w-8 h-8"
//               } rounded-full bg-white`}
//               alt=""
//             />
//             {isSidebarOpen && (
//               <div className="ml-4 uppercase">Creative Tim</div>
//             )}
//           </div>

//           {/* Menu */}
//           <ul className="mt-6 space-y-6 px-4 uppercase">
//             <li className="flex gap-2 text-sm">
//               <LayoutDashboard /> {isSidebarOpen && "Dashboard"}
//             </li>
//             <li className="flex gap-2 text-sm">
//               <Image /> {isSidebarOpen && "Pages"}
//             </li>
//             <li className="flex gap-2 text-sm">
//               <Hexagon /> {isSidebarOpen && "Component"}
//             </li>
//             <li className="flex gap-2 text-sm">
//               <ClipboardType /> {isSidebarOpen && "Forms"}
//             </li>
//             <li className="flex gap-2 text-sm">
//               <Sheet /> {isSidebarOpen && "Tables"}
//             </li>
//             <li className="flex gap-2 text-sm">
//               <Pin /> {isSidebarOpen && "Maps"}
//             </li>
//             <li className="flex gap-2 text-sm">
//               <Wrench /> {isSidebarOpen && "Widgets"}
//             </li>
//             <li className="flex gap-2 text-sm">
//               <ChartBar /> {isSidebarOpen && "Charts"}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;


import {
  ChartBar,
  ClipboardType,
  Hexagon,
  Image,
  LayoutDashboard,
  Pin,
  Sheet,
  Wrench,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSidebar } from "../Context/SideBarContext";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<any>(null);

  // ✅ responsive state (FIXED)
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= 768
  );

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    const handleChange = (e: any) => {
      setIsDesktop(e.matches);
    };

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  // 👉 Final open state
  const isSidebarOpen = isDesktop
    ? isOpen || isHovered
    : isOpen;

  // 👉 Hover handlers (desktop only)
  const handleMouseEnter = () => {
    if (isDesktop) {
      clearTimeout(timeoutRef.current);
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      timeoutRef.current = setTimeout(() => {
        setIsHovered(false);
      }, 150);
    }
  };

  return (
    <>
      {/* 🔲 Backdrop (mobile only) */}
      {isOpen && !isDesktop && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => toggleSidebar()} // ✅ outside click close
        />
      )}

      {/* 📚 Sidebar */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          fixed top-16 left-0 z-50
          ${!isOpen && !isDesktop ? "hidden" : ""}
        `}
      >
        {/* Hover zone (desktop only) */}
        {isDesktop && (
          <div className="absolute top-0 left-0 h-full w-56" />
        )}

        <div
          className={`
            bg-(--primary) text-white transition-all duration-300 rounded-t-md ml-2
            ${isSidebarOpen ? "w-56" : "w-16"}
            h-[calc(100vh-64px)]
            shadow-lg

            ${
              !isDesktop
                ? `transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                  } transition-transform duration-300`
                : ""
            }
          `}
        >
          {/* Header */}
          <div className="flex items-center mx-4 mt-4 border-b pb-4">
            <img
              src="https://demos.creative-tim.com/vue-black-dashboard-pro/img/icon-vue.png"
              className={`${
                isSidebarOpen ? "w-12 h-12" : "w-8 h-8"
              } rounded-full bg-white`}
              alt=""
            />
            {isSidebarOpen && (
              <div className="ml-4 uppercase">Creative Tim</div>
            )}
          </div>

          {/* Menu */}
          <ul className="mt-6 space-y-6 px-4 uppercase">
            <li className="flex gap-2 text-sm">
              <LayoutDashboard /> {isSidebarOpen && "Dashboard"}
            </li>
            <li className="flex gap-2 text-sm">
              <Image /> {isSidebarOpen && "Pages"}
            </li>
            <li className="flex gap-2 text-sm">
              <Hexagon /> {isSidebarOpen && "Component"}
            </li>
            <li className="flex gap-2 text-sm">
              <ClipboardType /> {isSidebarOpen && "Forms"}
            </li>
            <li className="flex gap-2 text-sm">
              <Sheet /> {isSidebarOpen && "Tables"}
            </li>
            <li className="flex gap-2 text-sm">
              <Pin /> {isSidebarOpen && "Maps"}
            </li>
            <li className="flex gap-2 text-sm">
              <Wrench /> {isSidebarOpen && "Widgets"}
            </li>
            <li className="flex gap-2 text-sm">
              <ChartBar /> {isSidebarOpen && "Charts"}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
