import React, { useState } from 'react'
import { HiMiniArrowsUpDown } from 'react-icons/hi2';
import { LuArrowLeftRight } from 'react-icons/lu';
import { BsGraphUpArrow, BsGraphDownArrow, BsArrowLeftRight } from 'react-icons/bs';
import styles from "./longShortSwap.module.css"
import FirstCoinBox from './firstCoinBox/FirstCoinBox'
import LeverageSlider from './leverageSlider/LeverageSlider'
import Values from './values/Values'
import BottomButton from './bottomButton/BottomButton'

const OptionsBox = () => {
    const [longShortSwip, setLongShortSwip] = useState("long")
  return (
    <div className={styles.optionsBox}>
        {/* Header */}
        <div className={styles.header}>
            <div onClick={()=>{setLongShortSwip("long")}} className={`${styles.headerBtn} ${longShortSwip==="long" && styles.headerActive}`}>
                <span className={styles.headerBtnIcon}><BsGraphUpArrow/></span>
                <span className={styles.headerBtnTxt} >Long</span>
            </div>
            <div onClick={()=>{setLongShortSwip("short")}} className={`${styles.headerBtn} ${longShortSwip==="short" && styles.headerActive}`}>
                <span className={styles.headerBtnIcon}><BsGraphDownArrow/></span>
                <span className={styles.headerBtnTxt}>Short</span>
            </div>
            <div onClick={()=>{setLongShortSwip("swip")}} className={`${styles.headerBtn} ${longShortSwip==="swip" && styles.headerActive}`}>
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
        {/* First Coin Box */}
        <FirstCoinBox/>
        <div className={styles.swiper}/>
        {/* <div className={styles.swipperBtn}>||</div> */}
        <div className={styles.swipperBtnContainer}>
            <div className={styles.swipperBtn}>
                <HiMiniArrowsUpDown size={18}/>
            </div>
        </div>
        <FirstCoinBox/>
        <LeverageSlider/>
        <Values/>
        <BottomButton/>
        {/* Second Coin Box */}
        {/* <SecondCoinBox/> */}
    </div>
  )
}

export default OptionsBox