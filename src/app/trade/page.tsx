"use client"
import React, { useState } from 'react'
import styles from "./trade.module.css"
import PageLayout from '@/components/pageLayout/PageLayout'
import ChartHeader from './components/charts/chartHeader/ChartHeader'
import Chart from './components/charts/chart/Chart'
import TradeFooter from './components/tradeFooter/TradeFooter'
import LongShortSwap from './components/longShortSwap/longShortSwap'
import SummaryBox from './components/summaryBox/SummaryBox'
import CoinModel from './components/coinsModel/CoinModel'
import useTokenModel from '@/hooks/useTokenModel'

const Trade = () => {
  const { isOpen:coinModel } = useTokenModel();
  return (
    <PageLayout>
      {coinModel &&
      <CoinModel/>}
      {/* Left Side */}
      <div className={styles.container}>
        <div className={styles.left}>
          <ChartHeader/>
          <Chart/>
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