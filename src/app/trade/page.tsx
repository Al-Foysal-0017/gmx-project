"use client"
import React from 'react'
import styles from "./trade.module.css"
import PageLayout from '@/components/pageLayout/PageLayout'
import ChartHeader from './components/charts/chartHeader/ChartHeader'
import TradeFooter from './components/tradeFooter/TradeFooter'
import LongShortSwap from './components/longShortSwap/longShortSwap'
import SummaryBox from './components/summaryBox/SummaryBox'
import TokenModel from './components/tokenModel/TokenModel'
import useTokenModel from '@/hooks/useTokenModel'
import CandlestickChartApexChart from './components/charts/chart/CandleChart'

const Trade = () => {
  const { isOpen:coinModel } = useTokenModel();
  return (
    <PageLayout>
      {coinModel &&
      <TokenModel/>}
      
      {/* Left Side */}
      <div className={styles.container}>
        <div className={styles.left}>
          <ChartHeader/>
          <CandlestickChartApexChart/>
          <TradeFooter/>
        </div>

        {/* Right Side */}
        <div className={styles.right}>
          <LongShortSwap/>
          <SummaryBox/>
        </div>
      </div>
    </PageLayout>
  )
}

export default Trade