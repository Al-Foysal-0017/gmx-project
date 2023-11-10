import React from 'react'
import styles from "./chartHeader.module.css"

const ChartHeader = () => {
  return (
    <div className={styles.chartHeader}>
        {/* Values */}
        <div className={styles.container}>
            <div className={styles.left}>
                <span className={styles.logo}>LOGO</span> 
                <span className={styles.coinName}>ARB/USD</span>
                <span className={styles.icon}>BI</span>
            </div>
            <div className={styles.right}>
                <span className={styles.valueContainer}>
                    <div className={styles.valueTop}>$1.085</div>
                    <div className={styles.valueBottom}>$1.084</div>
                </span>
                <span className={styles.valueContainer}>
                    <div className={styles.valueTop}>24h Change</div>
                    <div className={styles.valueBottom}>-0.01%</div>
                </span>
                <span className={styles.valueContainer}>
                    <div className={styles.valueTop}>24h High</div>
                    <div className={styles.valueBottom}>1.155</div>
                </span>
                <span className={styles.valueContainer}>
                    <div className={styles.valueTop}>24h Low</div>
                    <div className={styles.valueBottom}>0.973</div>
                </span>
            </div>
        </div>
        {/* Version */}
        <div className={styles.versionContainer}>
            <div className={`${styles.version} ${styles.versionActive}`}>V1</div>
            <div className={styles.version}>V2</div>
        </div>
    </div>
  )
}

export default ChartHeader