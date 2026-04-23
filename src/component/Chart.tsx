import ReactECharts from "echarts-for-react";
interface dataProps {
   "accounts": number[],
    "purchases": number[],
    "sessions": number[]
}

interface chartProps {
    activeTab:string;
    data:dataProps
}



const Chart = ({activeTab,data}:chartProps) => {
  const option = {
    backgroundColor: "transparent",
      grid: {
    left: 0,
    right: 0,
    top: 20,
    bottom: 20,
    containLabel: true
  },
 tooltip: { trigger: "axis" },
    xAxis: {
      type: "category",
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct","Nov","Dec"],
      axisLine: { lineStyle: { color: "#aaa" } }
    },
    yAxis: {
      type: "value",
      axisLine: { lineStyle: { color: "#aaa" } }
    },
    series: [
      {
        data: data[activeTab],
        type: "line",
        smooth: true,
        lineStyle: {
          color: "#34d399",
          width: 3
        },
        areaStyle: {
          color: "rgba(52, 211, 153, 0.1)"
        }
      }
    ]
  };

  return <ReactECharts className="w-full" option={option} style={{ height: 300, }} />;
};

export default Chart;