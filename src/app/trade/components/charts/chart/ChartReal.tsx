import 'apexcharts/dist/apexcharts.css';
import React, { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


export default function ChartSample() {
    const [dataSample, setDataSample] = useState({
        options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995]
            }
          },
          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49]
            }
          ]
        
      });
      

  return (
    <div>
      <Chart
        options={dataSample.options || {}}
        series={dataSample.series || []}
        type="bar"
        width={"100%"}
        height={"400"}
      />
    </div>
  );
}


