import React from 'react'
import styles from "./summaryBox.module.css"
import Wrapper from '@/components/Wrapper/Wrapper'

const SummaryBox = () => {
  return (
    <div className={styles.container}>
        <Wrapper className={styles.summaryBoxTitle}>Long ARB</Wrapper>
        <div className={styles.divider} />
        <Wrapper>
            <div className={styles.row}>
                <span className={styles.title}>Market</span>
                <span className={styles.value}>ARB/USD[ARB-USDC]</span>
            </div>
            <div className={styles.row}>
                <span className={styles.title}>Entry Price</span>
                <span className={styles.value}>$1.092</span>
            </div>
            <div className={styles.row}>
                <span className={styles.title}>Exit Price</span>
                <span className={styles.value}>$1.091</span>
            </div>
            <div className={styles.row}>
                <span className={styles.title}>Borrow Fee</span>
                <span className={styles.value}>-0.0014% / 1h</span>
            </div>
            <div className={styles.row}>
                <span className={styles.title}>Funding Fee</span>
                <span className={styles.value}>-0.0072% / 1h</span>
            </div>
            <div className={styles.row}>
                <span className={styles.title}>Available Liquidity</span>
                <span className={styles.value}>$832,301.30</span>
            </div>
            <div className={styles.row}>
                <span className={styles.title}>Open Interest Balance</span>
                <span className={styles.progressValue}></span>
            </div>
        </Wrapper>
    </div>
  )
}

export default SummaryBox