import React, { useState } from 'react';
import { ApexOptions } from 'apexcharts';
import { MdOutlineCandlestickChart } from "react-icons/md"
import styles from './chart.module.css';
import dynamic from 'next/dynamic';
import data from './data';
import Wrapper from '@/components/Wrapper/Wrapper';
import useChartState from '@/hooks/useChartState';
import useCurrentToken from '@/hooks/useCurrentToken';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const MultipleCharts = () => {
  const [dropdown, setDropdown] = useState(false);
  const {currentChart, setCandle, setBar, setLine, setArea } = useChartState();
  const {input2Value} = useCurrentToken();

  const options: ApexOptions = {
    chart: {
      type: currentChart as any,
    },
    title: {
      text: `${input2Value.token_name_short} / USD`,
      align: 'left',
      style: {
        color: 'white', // Set the text color to white
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: '#FFFFFF', // Set the color to white
        },
      },
      axisBorder: {
        show: false, // Show y-axis line
      },
      axisTicks: {
        show: false, // Show y-axis ticks
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
      labels: {
        style: {
          colors: '#FFFFFF', // Set the color to white
        },
      },
      axisBorder: {
        show: false, // Show y-axis line
      },
      axisTicks: {
        show: false, // Show y-axis ticks
      },
      // grid: {
      //   show: true, // Show y-axis grid lines
      //   borderColor: '#23263B', // Color of y-axis grid lines
      //   strokeDashArray: 4,
      // },
    },
    // grid: {
    //   borderColor: '#23263B',
    //   strokeDashArray: 4,
    // },
    grid: {
      borderColor: '#23263B',
      strokeDashArray: 4, // Set the stroke dash array to create dotted lines
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      enabled: true,
      followCursor:false,
      theme: 'dark',
      style: {
        fontSize: '12px',
      }
    },
    annotations: {
      xaxis: [
        {
          x: new Date(1538884800000).getTime(), // Set the x-coordinate for the vertical line
          borderColor: '#fff', // Set the color of the line to green
          label: {
            borderColor: '#000',
            style: {
              fontSize: '12px',
              color: '#000', // Set the color of the label text to white
            },
            text: 'Current', // Optional: Add a label text
          },
        },
      ],
    },
  };

  const series = [
    {
      data: data,
    },
  ];

  return (
    <Wrapper className={styles.chart}>
      <div className={styles.iconContainer} onClick={()=>{setDropdown(!dropdown)}}>
        <MdOutlineCandlestickChart size={24} className={styles.icon}/>
      </div>
      {dropdown &&
        <div className={styles.dropdown}>
          <button className={styles.chartSwitchButton} onClick={()=>{setCandle(); setDropdown(!dropdown)}}>Candlestick</button>
          <button className={styles.chartSwitchButton} onClick={()=>{setBar(); setDropdown(!dropdown)}}>Bar</button>
          <button className={styles.chartSwitchButton} onClick={()=>{setLine(); setDropdown(!dropdown)}}>Line</button>
          <button className={styles.chartSwitchButton} onClick={()=>{setArea(); setDropdown(!dropdown)}}>Area</button>
        </div>
      }
      <Chart options={options} series={series} type={currentChart as any} width="100%" height={350} />
    </Wrapper>
  );
};

export default MultipleCharts;
