import { type ReactNode } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 dark:bg-[#1e1e2f] transition-all duration-300 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;