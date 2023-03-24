import ReactEcharts from 'echarts-for-react';

const data = [
  { name: 'Brazil', value: 18203 },
  { name: 'Indonesia', value: 19703 },
  { name: 'Pakistan', value: 20903 },
  { name: 'Nigeria', value: 22307 },
  { name: 'Bangladesh', value: 24237 },
  { name: 'Russia', value: 25361 },
  { name: 'Japan', value: 26680 },
  { name: 'Mexico', value: 29538 },
  { name: 'Ethiopia', value: 31090 },
  { name: 'Philippines', value: 35698 },
  { name: 'Egypt', value: 38331 },
  { name: 'Vietnam', value: 42768 },
  { name: 'DR Congo', value: 47651 },
  { name: 'Turkey', value: 51403 },
  { name: 'Iran', value: 65666 },
  { name: 'Germany', value: 80220 },
  { name: 'Thailand', value: 89503 },
  { name: 'United Kingdom', value: 92091 },
  { name: 'France', value: 95795 },
  { name: 'Italy', value: 101251 },
  { name: 'Tanzania', value: 112557 },
  { name: 'South Africa', value: 118339 },
  { name: 'Myanmar', value: 135367 },
  { name: 'Kenya', value: 146682 },
  { name: 'South Korea', value: 161824 },
  { name: 'Colombia', value: 169106 },
  { name: 'Spain', value: 187420 },
  { name: 'Ukraine', value: 238031 },
  { name: 'Argentina', value: 241853 },
  { name: 'Uganda', value: 273494 },
  { name: 'Iraq', value: 300276 },
  { name: 'Poland', value: 310440 },
  { name: 'Canada', value: 342783 },
  { name: 'Morocco', value: 352767 },
  { name: 'Uzbekistan', value: 408538 },
  { name: 'Saudi Arabia', value: 447761 },
  { name: 'Malaysia', value: 454468 },
  { name: 'Peru', value: 494197 },
  { name: 'Venezuela', value: 528224 },
  { name: 'Nepal', value: 587622 },
  { name: 'Afghanistan', value: 652230 },
  { name: 'Yemen', value: 717426 },
  { name: 'Ghana', value: 764700 },
  { name: 'Mozambique', value: 799380 },
  { name: 'Taiwan', value: 894941 },
  { name: 'Australia', value: 909230 },
  { name: 'Syria', value: 913120 },
  { name: 'Madagascar', value: 1010182 },
  { name: 'Ivory Coast', value: 1172065 },
  { name: 'Cameroon', value: 1307013 },
  { name: 'North Korea', value: 1395384 },
  { name: 'Niger', value: 1552321 },
];

const BarRaceTable = () => {
  const option = {
    xAxis: {
      type: 'value',
      max: 1550000,
      show: false,
    },
    yAxis: {
      type: 'category',
      inverse: true,
      data: data.map((item) => item.name),
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          color: '#999',
          fontSize: 14,
        },
      },
    },
    series: [
      {
        name: 'Population',
        type: 'bar',
        data: data.map((item) => item.value),
        label: {
          show: true,
          position: 'right',
          valueAnimation: true,
          formatter: (params: any) => {
            return `${params.value / 1000}k`;
          },
          textStyle: {
            color: '#333',
            fontSize: 14,
          },
        },
        itemStyle: {
          color: '#c12e34',
        },
        emphasis: {
          itemStyle: {
            color: '#c12e34',
          },
        },
      },
    ],
  };

  return (
    <ReactEcharts option={option} style={{ height: '100%', width: '100%' }} />
  );
};

export default BarRaceTable;