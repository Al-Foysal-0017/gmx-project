import React from 'react'
import styles from "./leverageSlider.module.css"

const LeverageSlider = () => {
  return (
    <div className={styles.container}>
        <div className={styles.row}>
            <span>LeverageSlider</span>
            <span>TGB</span>
        </div>
        <div className={styles.range}><input type="range"/></div>
    </div>
  )
}

export default LeverageSlider