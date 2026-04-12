// // src/components/DashboardCards.tsx
// import ReactECharts from "echarts-for-react";

// const textColor = "#9ca3af";
// const gridColor = "#334155";

// const getLineOption = (data: number[], color: string) => ({
//   tooltip: { trigger: "axis" },
//   xAxis: {
//     type: "category",
//     data: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
//     axisLine: { lineStyle: { color: gridColor } },
//     axisLabel: { color: textColor },
//   },
//   yAxis: {
//     type: "value",
//     axisLine: { show: false },
//     splitLine: { lineStyle: { color: gridColor } },
//     axisLabel: { color: textColor },
//   },
//   grid: { left: 20, right: 20, top: 20, bottom: 20 },
//   series: [
//     {
//       data,
//       type: "line",
//       smooth: true,
//       symbol: "circle",
//       symbolSize: 8,
//       lineStyle: { color },
//       itemStyle: { color },
//       areaStyle: {
//         color: {
//           type: "linear",
//           x: 0,
//           y: 0,
//           x2: 0,
//           y2: 1,
//           colorStops: [
//             { offset: 0, color: color + "66" },
//             { offset: 1, color: "transparent" },
//           ],
//         },
//       },
//     },
//   ],
// });

// const getBarOption = () => ({
//   tooltip: {},
//   xAxis: {
//     type: "category",
//     data: ["USA", "GER", "AUS", "UK", "RO", "BR"],
//     axisLine: { lineStyle: { color: gridColor } },
//     axisLabel: { color: textColor },
//   },
//   yAxis: {
//     type: "value",
//     splitLine: { lineStyle: { color: gridColor } },
//     axisLabel: { color: textColor },
//   },
//   grid: { left: 20, right: 20, top: 20, bottom: 20 },
//   series: [
//     {
//       data: [50, 20, 10, 80, 100, 45],
//       type: "bar",
//       itemStyle: {
//         color: "#3b82f6",
//         borderRadius: [6, 6, 0, 0],
//       },
//     },
//   ],
// });

// export default function DashboardCards() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
      
//       {/* Card 1 */}
//       <div className="bg-[#1e293b] p-5 rounded-xl shadow-md">
//         <p className="text-gray-400 mb-2">Total Shipments</p>
//         <h2 className="text-2xl text-white mb-4">763,215</h2>

//         <ReactECharts
//           option={getLineOption([80, 100, 70, 80, 120, 80], "#34d399")}
//           style={{ height: 200 }}
//         />
//       </div>

//       {/* Card 2 */}
//       <div className="bg-[#1e293b] p-5 rounded-xl shadow-md">
//         <p className="text-gray-400 mb-2">Daily Sales</p>
//         <h2 className="text-2xl text-white mb-4">3,500€</h2>

//         <ReactECharts option={getBarOption()} style={{ height: 200 }} />
//       </div>

//       {/* Card 3 */}
//       <div className="bg-[#1e293b] p-5 rounded-xl shadow-md">
//         <p className="text-gray-400 mb-2">Completed Tasks</p>
//         <h2 className="text-2xl text-white mb-4">12,100K</h2>

//         <ReactECharts
//           option={getLineOption([90, 25, 60, 10, 80, 70], "#fb7185")}
//           style={{ height: 200 }}
//         />
//       </div>
//     </div>
//   );
// }

import ReactECharts from "echarts-for-react";
import { useTheme } from "../Context/ThemeContext";

const getThemeColors = (theme: "light" | "dark") => ({
  textColor: theme === "dark" ? "#9ca3af" : "#6b7280",
  gridColor: theme === "dark" ? "#334155" : "#e5e7eb",
  cardBg: theme === "dark" ? "#1e293b" : "#ffffff",
  textMain: theme === "dark" ? "#ffffff" : "#111827",
});

const getLineOption = (
  data: number[],
  color: string,
  textColor: string,
  gridColor: string
) => ({
  tooltip: { trigger: "axis" },
  xAxis: {
    type: "category",
    data: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    axisLine: { lineStyle: { color: gridColor } },
    axisLabel: { color: textColor },
  },
  yAxis: {
    type: "value",
    axisLine: { show: false },
    splitLine: { lineStyle: { color: gridColor } },
    axisLabel: { color: textColor },
  },
  grid: { left: 20, right: 20, top: 20, bottom: 20 },
  series: [
    {
      data,
      type: "line",
      smooth: true,
      symbol: "circle",
      symbolSize: 8,
      lineStyle: { color },
      itemStyle: { color },
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: color + "66" },
            { offset: 1, color: "transparent" },
          ],
        },
      },
    },
  ],
});

const getBarOption = (textColor: string, gridColor: string) => ({
  tooltip: {},
  xAxis: {
    type: "category",
    data: ["USA", "GER", "AUS", "UK", "RO", "BR"],
    axisLine: { lineStyle: { color: gridColor } },
    axisLabel: { color: textColor },
  },
  yAxis: {
    type: "value",
    splitLine: { lineStyle: { color: gridColor } },
    axisLabel: { color: textColor },
  },
  grid: { left: 20, right: 20, top: 20, bottom: 20 },
  series: [
    {
      data: [50, 20, 10, 80, 100, 45],
      type: "bar",
      itemStyle: {
        color: "#3b82f6",
        borderRadius: [6, 6, 0, 0],
      },
    },
  ],
});

export default function DashboardCards() {
  const { theme } = useTheme();
  const { textColor, gridColor, cardBg, textMain } =
    getThemeColors(theme);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
      
      {/* Card 1 */}
      <div
        className="p-5 rounded-xl shadow-md border transition-colors duration-300"
        style={{ backgroundColor: cardBg }}
      >
        <p style={{ color: textColor }} className="mb-2">
          Total Shipments
        </p>
        <h2 style={{ color: textMain }} className="text-2xl mb-4">
          763,215
        </h2>

        <ReactECharts
          option={getLineOption(
            [80, 100, 70, 80, 120, 80],
            "#34d399",
            textColor,
            gridColor
          )}
          style={{ height: 200 }}
        />
      </div>

      {/* Card 2 */}
      <div
        className="p-5 rounded-xl shadow-md border transition-colors duration-300"
        style={{ backgroundColor: cardBg }}
      >
        <p style={{ color: textColor }} className="mb-2">
          Daily Sales
        </p>
        <h2 style={{ color: textMain }} className="text-2xl mb-4">
          3,500€
        </h2>

        <ReactECharts
          option={getBarOption(textColor, gridColor)}
          style={{ height: 200 }}
        />
      </div>

      {/* Card 3 */}
      <div
        className="p-5 rounded-xl shadow-md border transition-colors duration-300"
        style={{ backgroundColor: cardBg }}
      >
        <p style={{ color: textColor }} className="mb-2">
          Completed Tasks
        </p>
        <h2 style={{ color: textMain }} className="text-2xl mb-4">
          12,100K
        </h2>

        <ReactECharts
          option={getLineOption(
            [90, 25, 60, 10, 80, 70],
            "#fb7185",
            textColor,
            gridColor
          )}
          style={{ height: 200 }}
        />
      </div>
    </div>
  );
}