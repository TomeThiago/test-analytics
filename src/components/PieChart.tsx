import ReactEcharts from "echarts-for-react";
import { useEffect, useState } from "react";

export interface PieChartDataProps { 
  value: number;
  name: string;
}

interface PieChartProps {
  data: PieChartDataProps[];
  colors?: string[];
}

export function PieChart({ data, colors }: PieChartProps) {
  const [dataPie, setDataPie] = useState(data);

  useEffect(() => {
    setDataPie(data)
  })

  let options = {
    color: colors ? colors : undefined,
    title: {
      text: 'Proporção',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'horizontal',
      left: 'center',
      top: 50
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: dataPie,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return (
    <>
      <ReactEcharts
        style={{ height: "100%", width: "100%" }}
        option={JSON.parse(JSON.stringify(options))}
      />
    </>
  );
}
