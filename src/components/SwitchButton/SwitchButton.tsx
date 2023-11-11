import React from 'react';
import styles from "./switch.module.css"

interface CustomSwitchProps {
  isActive: boolean; 
  toggleActive: () => void; 
}

const CustomSwitch = ({
  isActive,
  toggleActive,
}: CustomSwitchProps) => {
  return (
    <div className={styles.customSwitch}>
      <label className={styles.switch}>
        <input className={styles.input} type="checkbox" checked={isActive} onChange={toggleActive} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default CustomSwitch;
