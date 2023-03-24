import { useEffect, useState } from 'react';
import ReactEcharts from 'echarts-for-react';

function LineRaceChart() {
  const [option, setOption] = useState({
    title: {
      text: 'ECharts Line Race',
      subtext: 'Demo for ECharts Race in Line Chart',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['2010', '2011', '2012', '2013', '2014', '2015'],
    },
    grid: {
      top: 80,
      bottom: 30,
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: 'category',
      data: ['Java', 'C', 'Python', 'C++', 'Visual Basic .NET', 'C#'],
    },
    series: [
      {
        name: '2010',
        type: 'line',
        data: [100, 56, 78, 45, 67, 89],
      },
      {
        name: '2011',
        type: 'line',
        data: [98, 76, 54, 32, 87, 65],
      },
      {
        name: '2012',
        type: 'line',
        data: [56, 78, 98, 67, 45, 23],
      },
      {
        name: '2013',
        type: 'line',
        data: [23, 45, 67, 76, 87, 98],
      },
      {
        name: '2014',
        type: 'line',
        data: [56, 78, 90, 32, 54, 76],
      },
      {
        name: '2015',
        type: 'line',
        data: [87, 65, 43, 21, 90, 78],
      },
    ],
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOption((prevOption) => {
        const newSeries = prevOption.series.map((series) => {
          const newData = [...series.data];
          newData.shift();
          newData.push(Math.floor(Math.random() * 100));
          return {
            ...series,
            data: newData,
          };
        });
        return {
          ...prevOption,
          series: newSeries,
        };
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <ReactEcharts option={option}  style={{ width: '100%', height: '100%' }}/>;
}

export default LineRaceChart;
