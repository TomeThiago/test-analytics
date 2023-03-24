import { useEffect, useState } from "react";

import "./styles.css";
import { api } from "../../service/api";
import { PieChart } from "../../components/PieChart";

export function Page2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/events').then((response) => {
      setData(response.data);
    })
  }, [])


  return (
    <div className="page2-container">
      <PieChart data={data} />
    </div>
  )
}