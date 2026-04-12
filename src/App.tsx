import { useState } from "react";
import Chart from "./component/Chart";
import GlobalSales from "./component/GlobalSales";
import LineBarChartCard from "./component/LineBarChartCard";
import Navbar from "./component/Navbar";
import SettingsModal from "./component/SettingModal";
import Sidebar from "./component/sidebar";
import StatsCard from "./component/StatCard";
import TasksAndTable from "./component/TaskAndTableCard";
import { SidebarProvider, useSidebar } from "./Context/SideBarContext";

const Layout = () => {

  const { isOpen } = useSidebar();
  const [activeTab, setActiveTab] = useState("accounts");

  const chartData = {
    accounts: [10, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
    purchases: [50, 40, 60, 55, 70, 65, 80, 75, 85, 95, 100, 90],
    sessions: [10, 100, 110, 95, 105, 90, 100, 85, 110, 120, 130, 125],
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 dark:bg-[#121212] transition-all">
      {/* 🔝 Navbar */}
      <Navbar />

      {/* 📦 Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* 📚 Sidebar */}
        <Sidebar />

        {/* 📊 Main Content */}
        {/* <main className="flex-1 overflow-y-auto p-4 sm:p-6"> */}
        <main
  className={`
    md:flex-1 overflow-y-auto p-4 sm:p-6 transition-all duration-300  border-red-50
    ${isOpen ? "md:ml-56" : "md:ml-16"}
  `}
>
          {/* Chart Card */}
          <div className="bg-white dark:bg-[#1e1e2f] rounded-xl shadow p-4 sm:p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <span className="text-[16px] text-gray-400 text-sm font-light">
                  Total shipments
                </span>
                <h2 className="text-[27px]  mb-4 text-gray-700 dark:text-white font-light">
                  Performance
                </h2>
              </div>

              {/* Tabs */}
              <div className="flex justify-end mb-4">
                {["accounts", "purchases", "sessions"].map((tab,i) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1 border 
                     ${ (i == 0) ? "rounded-l-md" : i == 2 ?   "rounded-r-md" : ""
                      }
              ${ 
                activeTab === tab
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                  : "text-pink-400 border-pink-500"
              }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <Chart activeTab={activeTab} data={chartData} />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <StatsCard title="Storage" value="150GB" />
            <StatsCard title="Followers" value="+45K" />
            <StatsCard title="Users" value="150,000" />
            <StatsCard title="Errors" value="23" />
          </div>
 
          <div>
              <LineBarChartCard />
          </div>
          <div>
            <TasksAndTable/>
          </div>
          <div>
            <GlobalSales/>
          </div>
        </main>
      </div>

      {/* ⚙️ Floating Settings */}
      <button
    
      >
   
          <SettingsModal
       
            />
      </button>

    
    </div>
  );
};

const App = () => {
  return (
    <SidebarProvider>
      <Layout />
    </SidebarProvider>
  );
};

export default App;
