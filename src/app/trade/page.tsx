import React from 'react'
import styles from "./trade.module.css"
import PageLayout from '@/components/pageLayout/PageLayout'
import ChartHeader from './components/charts/chartHeader/ChartHeader'
import Chart from './components/charts/chart/Chart'
import TradeFooter from './components/tradeFooter/TradeFooter'
import OptionsBox from './components/longShortSwap/longShortSwap'
import SummaryBox from './components/summaryBox/SummaryBox'

const Trade = () => {
  return (
    <PageLayout>
      {/* Left Side */}
      <div className={styles.container}>
        <div className={styles.left}>
          <ChartHeader/>
          <Chart/>
          <TradeFooter/>
        </div>
        {/* Right Side */}
        <div className={styles.right}>
          <OptionsBox/>
          <SummaryBox/>
        </div>
      </div>
    </PageLayout>
  )
}

export default Trade