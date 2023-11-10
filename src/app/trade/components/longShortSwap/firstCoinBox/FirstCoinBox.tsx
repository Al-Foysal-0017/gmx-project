import React from 'react'
import styles from "./firstCoinBox.module.css"

const FirstCoinBox = () => {
  return (
    <div className={styles.container}>
        <div className={styles.headerRow}>
            <span>Pay</span>
            <span>Balance</span>
        </div>
        <div className={styles.inputRow}>
            <input type='number' placeholder='0.0' className={styles.input}/>
            <span className={styles.coinBox}>
                <span>ICN</span>
                <span>SOL</span>
                <span>ICN</span>
            </span>
        </div>
    </div>
  )
}

export default FirstCoinBox