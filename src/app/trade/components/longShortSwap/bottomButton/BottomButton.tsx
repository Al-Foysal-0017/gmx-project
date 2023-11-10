import Button from '@/components/Button/Button'
import React from 'react'
import styles from "./bottomPart.module.css"

const BottomButton = () => {
  return (
    <div>
        <div className={styles.row}>
            <span className={styles.title}>Fees and Price Impact</span>
            <span className={styles.value}>-$2.28</span>
        </div>
        <Button label='Connect Wallet' large fullWidth />
    </div>
  )
}

export default BottomButton