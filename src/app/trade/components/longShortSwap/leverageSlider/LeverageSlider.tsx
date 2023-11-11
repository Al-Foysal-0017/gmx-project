"use client"
import React, { useState } from 'react'
import styles from "./leverageSlider.module.css"
import CustomSwitch from '@/components/SwitchButton/SwitchButton';

const LeverageSlider = () => {
  const [isSwitchActive, setSwitchActive] = useState(false);
  const toggleSwitch = () => {
    setSwitchActive(!isSwitchActive);
  };
  return (
    <div className={styles.container}>
        <div className={styles.row}>
            <span>LeverageSlider</span>
            <span><CustomSwitch
                isActive={isSwitchActive}
                toggleActive={toggleSwitch}
            /></span>
        </div>
        <div className={styles.range}>
          {isSwitchActive &&
            <input type="range"/>
          }
        </div>
    </div>
  )
}

export default LeverageSlider