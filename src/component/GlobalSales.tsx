

// import WorldMap from "./WorldMap";



// const data = [
//   { country: "USA", value: "2,920", percent: "53.23%", flag: "🇺🇸" },
//   { country: "Germany", value: "1,300", percent: "20.43%", flag: "🇩🇪" },
//   { country: "Australia", value: "760", percent: "10.35%", flag: "🇦🇺" },
//   { country: "United Kingdom", value: "690", percent: "7.87%", flag: "🇬🇧" },
//   { country: "Romania", value: "600", percent: "5.94%", flag: "🇷🇴" },
//   { country: "Brazil", value: "550", percent: "4.34%", flag: "🇧🇷" },
// ];

// const GlobalSales = () => {
//   return (
//     <div className="bg-[#1e2139] text-white rounded-2xl p-6 shadow-lg">
//       <h2 className="text-xl font-semibold mb-1">
//         Global Sales by Top Locations
//       </h2>
//       <p className="text-gray-400 text-sm mb-6">
//         All Products That Were Shipped
//       </p>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        
//         {/* LEFT TABLE */}
//         <div className="space-y-4">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="flex justify-between items-center border-b border-gray-700 pb-3"
//             >
//               <div className="flex items-center gap-3">
//                 <span className="text-xl">{item.flag}</span>
//                 <span>{item.country}</span>
//               </div>

//               <div className="flex gap-8 text-gray-300">
//                 <span>{item.value}</span>
//                 <span>{item.percent}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT MAP */}
//         <div className=" w-full h-75 overflow-hidden">
       
//           <WorldMap/>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default GlobalSales;



import WorldMap from "./WorldMap";

const data = [
  { country: "USA", value: "2,920", percent: "53.23%", flag: "🇺🇸" },
  { country: "Germany", value: "1,300", percent: "20.43%", flag: "🇩🇪" },
  { country: "Australia", value: "760", percent: "10.35%", flag: "🇦🇺" },
  { country: "United Kingdom", value: "690", percent: "7.87%", flag: "🇬🇧" },
  { country: "Romania", value: "600", percent: "5.94%", flag: "🇷🇴" },
  { country: "Brazil", value: "550", percent: "4.34%", flag: "🇧🇷" },
];

const GlobalSales = () => {
  return (
    <div className="rounded-2xl p-6 shadow-lg
      bg-white text-gray-900
      dark:bg-[#1e2139] dark:text-white"
    >
      <h2 className="text-xl font-semibold mb-1">
        Global Sales by Top Locations
      </h2>

      <p className="text-sm mb-6
        text-gray-500 dark:text-gray-400"
      >
        All Products That Were Shipped
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        
        {/* LEFT TABLE */}
        <div className="space-y-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center pb-3
              border-b border-gray-200
              dark:border-gray-700"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{item.flag}</span>
                <span>{item.country}</span>
              </div>

              <div className="flex gap-8
                text-gray-600 dark:text-gray-300"
              >
                <span>{item.value}</span>
                <span>{item.percent}</span>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT MAP */}
        <div className="w-full h-75 overflow-hidden rounded-xl
          bg-gray-100 dark:bg-[#15172b]"
        >
          <WorldMap />
        </div>
      </div>
    </div>
  );
};

export default GlobalSales;