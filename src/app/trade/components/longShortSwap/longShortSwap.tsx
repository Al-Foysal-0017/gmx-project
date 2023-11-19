import React from 'react'
import { BsGraphUpArrow, BsGraphDownArrow, BsArrowLeftRight } from 'react-icons/bs';
import styles from "./longShortSwap.module.css"
import InputField from './inputField/inputField'
import LeverageSlider from './leverageSlider/LeverageSlider'
import Values from './values/Values'
import BottomButton from './bottomButton/BottomButton'
import useLongShortSwap from '@/hooks/useLongShortSwap';
import useMarketLimitTPStore from '@/hooks/useMarketLimitTP';
import Wrapper from '@/components/Wrapper/Wrapper';

const OptionsBox = () => {
    const {currentStatus, setLong, setShort, setSwap} = useLongShortSwap();
    const {currentOption, setMarket, setLimit, setTP} = useMarketLimitTPStore()
  return (
    <Wrapper className={styles.optionsBox}>
        {/* currentStatus==="swap" &&  currentOption==="tp" ---> currentOption==="market" */}
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
            <span onClick={setMarket} className={`${styles.marketLimitTpBtn} ${currentOption==="market" && styles.marketLimitTpBtnActive}`}>Market</span>
            <span onClick={setLimit} className={`${styles.marketLimitTpBtn} ${currentOption==="limit" && styles.marketLimitTpBtnActive}`}>Limit</span>
            {currentStatus!=="swap" &&
                <span onClick={setTP} className={`${styles.marketLimitTpBtn} ${currentOption==="tp" && styles.marketLimitTpBtnActive}`}>TP/SL</span>
            }
        </div>
        <InputField/>

        {currentStatus!=="swap" &&
            <>
                <LeverageSlider/>
                <Values/>
            </> 
        }

        <BottomButton/>
    </Wrapper>
  )
}

export default OptionsBox