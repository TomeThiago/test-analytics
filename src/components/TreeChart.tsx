import ReactEcharts from "echarts-for-react";

import data from '../data/tree.json';
import { useState } from "react";

export function TreeChart() {
  const [name, setName] = useState('');
  
  const options = {
    series: [
      {
        type: "tree",
  
        name: "tree1",
  
        data: [data],
  
        top: "5%",
        left: "7%",
        bottom: "2%",
        right: "60%",
  
        symbolSize: 7,
  
        label: {
          position: "left",
          verticalAlign: "middle",
          align: "right"
        },
  
        leaves: {
          label: {
            position: "right",
            verticalAlign: "middle",
            align: "left"
          }
        },

        initialTreeDepth: 2,
  
        emphasis: {
          focus: "descendant"
        },
  
        roam: "zoom",
  
        expandAndCollapse: true,
  
        animationDuration: 550,
        animationDurationUpdate: 750
      }
    ]
  };

  const Selected = ({ name }: any) => {
    return <>{name ? <p style={{ color: 'black' }}>{name} selected 🚀</p> : <p style={{ color: 'black' }}>No item selected 🤔</p>}</>;
  };

  return (
    <>
      <Selected name={name} />
      <ReactEcharts
        style={{ height: "100%", width: "100%" }}
        option={options}
        onEvents={{
          click: (e: any) => setName(e.name)
        }}
      />
    </>
  );
}
