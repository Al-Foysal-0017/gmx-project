import React from 'react'
import styles from "./tradeFooter.module.css"
import Wrapper from '@/components/Wrapper/Wrapper'

const TradeFooter = () => {
  return (
    <div className={styles.tradeFooter}>
        <div className={styles.header}>
            <div className={styles.headerBtns}>
                <span className={styles.headerBtn}>Positions</span>
                <span className={styles.headerBtn}>Orders</span>
                <span className={styles.headerBtn}>Trades</span>
                <span className={styles.headerBtn}>Claims</span>
            </div>
            <div className={styles.headerRight}>
                <input type='checkbox' className={styles.headerRightInput}/>
                <span className={styles.headerRightTxt}>Chart positions</span>
            </div>
        </div>
        <Wrapper className={styles.container}>
            No open positions
        </Wrapper>
    </div>
  )
}

export default TradeFooter