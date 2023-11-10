import React from 'react'
import styles from "./values.module.css"

const Values = () => {
  return (
    <div>
        <div className={styles.row}>
            <span className={styles.title}>Pool</span>
            <span className={styles.value}>ARB-USDC</span>
        </div>
        <div className={styles.row}>
            <span className={styles.title}>Collateral In</span>
            <span className={styles.value}>USDC</span>
        </div>
        <div className={styles.divider}/>
        <div className={styles.row}>
            <span className={styles.title}>Leverage</span>
            <span className={styles.value}>50.00x</span>
        </div>
        <div className={styles.row}>
            <span className={styles.title}>Entry Price</span>
            <span className={styles.value}>$1.195</span>
        </div>
        <div className={styles.row}>
            <span className={styles.title}>Price Impact</span>
            <span className={styles.value}>0.00%</span>
        </div>
        <div className={styles.row}>
            <span className={styles.title}>Acceptable Price</span>
            <span className={styles.value}>-</span>
        </div>
        <div className={styles.row}>
            <span className={styles.title}>Liq. Price</span>
            <span className={styles.value}>-</span>
        </div>
    </div>
  )
}

export default Values