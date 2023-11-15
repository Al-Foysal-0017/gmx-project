import React from 'react'
import { BsGraphUpArrow, BsGraphDownArrow, BsArrowLeftRight } from 'react-icons/bs';
import styles from "./longShortSwap.module.css"
import InputField from './inputField/inputField'
import LeverageSlider from './leverageSlider/LeverageSlider'
import Values from './values/Values'
import BottomButton from './bottomButton/BottomButton'
import useLongShortSwap from '@/hooks/useLongShortSwap';

const OptionsBox = () => {
    const {currentStatus, setLong, setShort, setSwap} = useLongShortSwap();
  return (
    <div className={styles.optionsBox}>
        {/* Header */}
        <div className={styles.header}>
            <div onClick={setLong} className={`${styles.headerBtn} ${currentStatus==="long" && styles.headerActive}`}>
                <span className={styles.headerBtnIcon}><BsGraphUpArrow/></span>
                <span className={styles.headerBtnTxt} >Long</span>
            </div>
            <div onClick={setShort} className={`${styles.headerBtn} ${currentStatus==="short" && styles.headerActive}`}>
                <span className={styles.headerBtnIcon}><BsGraphDownArrow/></span>
                <span className={styles.headerBtnTxt}>Short</span>
            </div>
            <div onClick={setSwap} className={`${styles.headerBtn} ${currentStatus==="swap" && styles.headerActive}`}>
                <span className={styles.headerBtnIcon}><BsArrowLeftRight/></span>
                <span className={styles.headerBtnTxt}>Swap</span>
            </div>
        </div>
        {/* Set Market, Limit, TP/SL*/}
        <div className={styles.marketLimitTpRow}>
            <span className={styles.marketLimitTpBtn}>Market</span>
            <span className={styles.marketLimitTpBtn}>Limit</span>
            <span className={styles.marketLimitTpBtn}>TP/SL</span>
        </div>
        <InputField/>

        {currentStatus!=="swap" &&
            <>
                <LeverageSlider/>
                <Values/>
            </> 
        }

        <BottomButton/>
    </div>
  )
}

export default OptionsBox