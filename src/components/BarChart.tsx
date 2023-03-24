import { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";

export interface BarChartDataProps {
  name: string;
  data: number[]
}

interface BarChartProps {
  data: BarChartDataProps[];
  colors?: string[];
  xAxis: string[];
}

export function BarChart({ data, colors, xAxis }: BarChartProps) {
  const [dataPie, setDataPie] = useState<BarChartDataProps[]>(data);

  useEffect(() => {
    setDataPie(data);
  });

  const options = {
    color: colors,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow' 
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: xAxis,
    },
    yAxis: {
      type: 'value'
    },
    dataZoom: [
      {
        type: 'inside'
      },
      {
        type: 'slider'
      }
    ],
    series: dataPie.map(data => {
      return {
        name: data.name,
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: data.data
      }
    })
  };

  return (
    <ReactEcharts
      option={JSON.parse(JSON.stringify(options))}
      style={{ height: "100%", width: "100%" }}
    />
  );
}
