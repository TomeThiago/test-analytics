import IncomeChart from "../../components/IncomeChart";
import LineRaceChart from "../../components/LineRaceChart";

import "./styles.css";
import { Chart } from "../../components/Chart";
import BarRaceTable from "../../components/BarRaceTable";
import { GraphWebkitChart } from "../../components/GraphWebkitChart";
import { TreeChart } from "../../components/TreeChart";
import { PieChart } from "../../components/PieChart";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { EventColorEnum } from "../../enum/EventColor";
import { BarChart, BarChartDataProps } from "../../components/BarChart";

const option = {
  color: ["#5470C6", "#6d0781"],
  tooltip: {
    trigger: "none",
    axisPointer: {
      type: "cross",
    },
  },
  legend: {},
  grid: {
    top: 70,
    bottom: 50,
  },
  xAxis: [
    {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: "#5470C6",
        },
      },
      axisPointer: {
        label: {
          formatter: function (params: any) {
            return (
              "Precipitation  " +
              params.value +
              (params.seriesData.length ? "：" + params.seriesData[0].data : "")
            );
          },
        },
      },
      // prettier-ignore
      data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12'],
    },
    {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: "#6d0781",
        },
      },
      axisPointer: {
        label: {
          formatter: function (params: any) {
            return (
              "Precipitation  " +
              params.value +
              (params.seriesData.length ? "：" + params.seriesData[0].data : "")
            );
          },
        },
      },
      // prettier-ignore
      data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12'],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Precipitation(2015)",
      type: "line",
      xAxisIndex: 1,
      smooth: true,
      emphasis: {
        focus: "series",
      },
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
      ],
    },
    {
      name: "Precipitation(2016)",
      type: "line",
      smooth: true,
      emphasis: {
        focus: "series",
      },
      data: [
        3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7,
      ],
    },
  ],
};

const option2 = {
  xAxis: {
    type: "category",
    data: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
    },
  ],
};

const option3 = {
  title: {
    text: "Basic Radar Chart",
  },
  legend: {
    data: ["Allocated Budget", "Actual Spending"],
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: "Sales", max: 6500 },
      { name: "Administration", max: 16000 },
      { name: "Information Technology", max: 30000 },
      { name: "Customer Support", max: 38000 },
      { name: "Development", max: 52000 },
      { name: "Marketing", max: 25000 },
    ],
  },
  series: [
    {
      name: "Budget vs spending",
      type: "radar",
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: "Allocated Budget",
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: "Actual Spending",
        },
      ],
    },
  ],
};

interface PieChartColorOptions {
  value: number;
  name: string;
  color: string;
}

interface EventResponse {
  dia: string;
  evento: string;
  total: number;
}

export function Page1() {
  const [events, setEvents] = useState<EventResponse[]>([]);
  const [dataPie, setDataPie] = useState<PieChartColorOptions[]>([]);

  useEffect(() => {
    api.get("/events/get_events?token=tAdQBTs0z4O0oHv9MX8UeQP2wRcvajMdpUIloU5WoOdSi5LINTlKegUcTw4d685e6d01332c2e64e30b2d7b6c45fd76d8f8e4f6&day=2023-03-24").then((response) => {
      console.log(response.data);
      /*setEvents(response.data);

      const listData: any[] = [];

      response.data.map((response: any) => {
        const index = listData.findIndex(
          (event) => event.name === response.evento
        );

        if (index !== -1) {
          listData[index].value += response.total;
        } else {
          console.log();

          listData.push({
            name: response.evento,
            value: response.total,
            color: EventColorEnum[response.evento],
          });
        }
      });

      setDataPie(listData);*/
    });
  }, []);

  const renderBarChart = () => {
    const listData: BarChartDataProps[] = [];

    events.forEach((event) => {
      const index = listData.findIndex(data => data.name === event.evento)
      
      if(index !== -1) {
        listData[index].data.push(event.total);
      } else {
        listData.push({
          name: event.evento,
          data: [event.total],
        });
      }
    });

    return listData;
  };

  const renderBarAxisX = () => {
    const listData: string[] = [];

    events.forEach((event) => {
      const index = listData.findIndex(data => data === event.dia)
      
      if(index === -1) {
        listData.push(event.dia,);
      }
    });

    return listData;
  }

  return (
    <div className="page1-content">
      <div className="row">
        <div className="card">
          <Chart options={option} />
        </div>

        <div className="card">
          <Chart options={option2} />
        </div>
      </div>

      <div className="row">
        <div className="card">
          <LineRaceChart />
        </div>
      </div>

      <div className="row" style={{ height: 1500 }}>
        <div className="card">
          <BarRaceTable />
        </div>
      </div>

      <div className="row" style={{ height: 700 }}>
        <div className="card">
          <GraphWebkitChart />
        </div>

        <div className="card">
          <Chart options={option3} />
        </div>
      </div>

      <div className="row" style={{ height: 950 }}>
        <div className="card">
          <TreeChart />
        </div>

        <div className="card">
          <PieChart colors={dataPie.map((data) => data.color)} data={dataPie} />
        </div>
      </div>

      <div className="row">
        <div className="card">
          <Chart options={option} />
        </div>

        <div className="card">
          <Chart options={option2} />
        </div>
      </div>

      <div className="row">
        <div className="card">
          <IncomeChart />
        </div>
      </div>

      <div className="row" style={{ height: 1000 }}>
        <div className="card">
          <BarChart
            colors={dataPie.map((data) => data.color)}
            data={renderBarChart()}
            xAxis={renderBarAxisX()}
          />
        </div>
      </div>
    </div>
  );
}
