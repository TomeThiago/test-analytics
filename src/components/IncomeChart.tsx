import ReactEcharts from 'echarts-for-react';

function IncomeChart() {
  const options = {
    title: {
      text: 'Renda da Alemanha e França desde 1950',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Alemanha', 'França'],
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'],
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} USD',
      },
    },
    series: [
      {
        name: 'Alemanha',
        type: 'line',
        data: [1000, 2000, 5000, 8000, 10000, 12000, 14000, 16000],
      },
      {
        name: 'França',
        type: 'line',
        data: [900, 1800, 4500, 7000, 9000, 11000, 13000, 15000],
      },
    ],
  };

  return <ReactEcharts option={options} style={{ width: '100%', height: '100%' }} />;
}

export default IncomeChart;
