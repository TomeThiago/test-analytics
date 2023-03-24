import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface ChartProps {
  options: any
}

export const Chart = ({ options }: ChartProps) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if(chartRef.current === null) {
      return 
    }

    const chart = echarts.init(chartRef.current);

    chart.setOption(options, true);

    return () => {
      chart.dispose();
    };
  }, [options]);

  return <div ref={chartRef} style={{ height: '100%', width: '100%' }} />;
};