
// import React from 'react';
// import { ApexOptions } from 'apexcharts';
// import styles from "./chart.module.css"

// import dynamic from "next/dynamic";
// import data from './data';
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// const CandlestickChartApexChart = () => {
//   const options: ApexOptions = {
//     chart: {
//       type: 'candlestick',
//     },
//     title: {
//       text: 'Candlestick Chart',
//       align: 'left',
//     },
//     xaxis: {
//       type: 'datetime',
//     },
//     yaxis: {
//       tooltip: {
//         enabled: true,
//       }
//     },
//     grid: {
//         borderColor: '#23263B', // Change grid color
//         strokeDashArray: 4, // Make grid lines dashed
//     },
//     tooltip: {
//         enabled: true,
//         theme: 'dark', // Set theme to dark for black background
//         style: {
//           fontSize: '12px',
//         //   color: '#ffffff', // Set text color to white
//         },
//     },
//   };

//   const series = [
//     {
//       data: data
//     },
//   ];

//   return (
//     <div className={styles.chart}>
//       <Chart 
//         options={options} 
//         series={series} 
//         type="candlestick" 
//         width={"100%"}
//         height={"380"}
//     />
//     </div>
//   );
// };

// export default CandlestickChartApexChart;


import React, { useState } from 'react';
import { ApexOptions } from 'apexcharts';
import styles from './chart.module.css';
import dynamic from 'next/dynamic';
import data from './data';
import Wrapper from '@/components/Wrapper/Wrapper';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// Define a union type for valid chart types
// type ChartType = 'candlestick' | 'bar' | 'line' | 'area' | 'baseline' | 'heikinashi';

const MultipleCharts = () => {
  // const [chartType, setChartType] = useState<ChartType>('candlestick');
  const [chartType, setChartType] = useState<any>('candlestick');

  const options: ApexOptions = {
    chart: {
      type: chartType,
    },
    title: {
      text: `Chart`,
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    grid: {
      borderColor: '#23263B',
      strokeDashArray: 4,
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
      style: {
        fontSize: '12px',
      },
    },
  };

  const series = [
    {
      data: data,
    },
  ];

  // const capitalizeFirstLetter = (str: string) => {
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // };

  return (
    <Wrapper className={styles.chart}>
      <div className={styles.buttons}>
        <button className={styles.chartSwitchButton} onClick={() => setChartType('candlestick')}>Candlestick</button>
        <button className={styles.chartSwitchButton} onClick={() => setChartType('bar')}>Bar</button>
        <button className={styles.chartSwitchButton} onClick={() => setChartType('line')}>Line</button>
        <button className={styles.chartSwitchButton} onClick={() => setChartType('area')}>Area</button>
        {/* <button onClick={() => setChartType('baseline')}>Baseline</button> */}
        {/* <button onClick={() => setChartType('heikinashi')}>Heikin Ashi</button> */}
      </div>
      <Chart options={options} series={series} type={chartType} width="100%" height={350} />
    </Wrapper>
  );
};

export default MultipleCharts;
