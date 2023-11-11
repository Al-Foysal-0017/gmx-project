"use client"
import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs';
import styles from "./chartHeader.module.css"
import useVersion from '@/hooks/useVersion';
import Image from 'next/image';
import TokenList from '../tokenList/TokenList';

const ChartHeader = () => {
    const { version, setV1, setV2 } = useVersion();
    const [openCoinList, setOpenCoinList] = useState(false)
  return (
    <>
    <div className={styles.chartHeader}>
        {/* Values */}
        <div className={styles.container}>
            <div onClick={()=>{setOpenCoinList(!openCoinList)}} className={styles.left}>
                <Image
                    width={20} 
                    height={20} 
                    src="https://app.gmx.io/static/media/ic_arb_24.93fe233c9499c66fc2c5.svg"
                    alt="ARB/USD"
                    className={styles.logo}
                />
                <span className={styles.coinName}>ARB/USD</span>
                <BsChevronDown size={18} className={styles.icon}/>
                
            </div>
            <div className={styles.right}>
                <span className={styles.valueContainer}>
                    <div className={styles.primaryTxt}>$1.085</div>
                    <div className={styles.secondaryTxt}>$1.084</div>
                </span>
                <span className={styles.valueContainer}>
                    <div className={styles.secondaryTxt}>24h Change</div>
                    <div className={styles.dynamicTxt}>-0.01%</div>
                </span>
                <span className={styles.valueContainer}>
                    <div className={styles.secondaryTxt}>24h High</div>
                    <div className={styles.primaryTxt}>1.155</div>
                </span>
                <span className={styles.valueContainer}>
                    <div className={styles.secondaryTxt}>24h Low</div>
                    <div className={styles.primaryTxt}>0.973</div>
                </span>
            </div>
        </div>
        
        {/* Version */}
        <div className={styles.versionContainer}>
            <div 
                onClick={setV1}
                className={`${styles.version} ${version=="v1" && styles.versionActive}`}
            >
                V1
            </div>
            <div
                onClick={setV2}
                className={`${styles.version} ${version=="v2" && styles.versionActive}`}
            >
                V2
            </div>
        </div>
    </div>
    <TokenList openCoinList={openCoinList} setOpenCoinList={setOpenCoinList}/>
    </>
  )
}

export default ChartHeader 