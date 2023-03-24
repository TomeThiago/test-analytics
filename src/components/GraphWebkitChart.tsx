import ReactEcharts from "echarts-for-react";

import data from '../data/graph-web-kit.json'

export function GraphWebkitChart() {
  return (
    <>
      <ReactEcharts
        option={{
          legend: {
            data: ["HTMLElement", "WebGL", "SVG", "CSS", "Other"],
          },
          series: [
            {
              type: "graph",
              layout: "force",
              animation: false,
              label: {
                position: "right",
                formatter: "{b}",
              },
              draggable: true,
              data: data?.nodes?.map(function (node, idx) {
                node.id = idx;
                return node;
              }),
              categories: data?.categories,
              force: {
                edgeLength: 5,
                repulsion: 20,
                gravity: 0.2,
              },
              edges: data?.links,
            },
          ],
        }}
        style={{ height: "100%", width: "100%" }}
      />
    </>
  );
}
