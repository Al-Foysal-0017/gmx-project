"use client"
import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs';
import styles from "./chartHeader.module.css"
import useVersion from '@/hooks/useVersion';
import Image from 'next/image';
import TokenList from '../tokenList/TokenList';
import Wrapper from '@/components/Wrapper/Wrapper';
import useCurrentToken from '@/hooks/useCurrentToken';

const ChartHeader = () => {
    const { version, setV1, setV2 } = useVersion();
    const [openCoinList, setOpenCoinList] = useState(false);
    const {input2Value} = useCurrentToken();
  return (
    <>
    <div className={styles.chartHeader}>
        <Wrapper className={styles.container}>
            <div onClick={()=>{setOpenCoinList(!openCoinList)}} className={styles.left}>
                <Image
                    width={20} 
                    height={20} 
                    src={input2Value.img}
                    alt={`${input2Value.token_name_short}/USD`}
                    className={styles.logo}
                />
                <span className={styles.coinName}>{input2Value.token_name_short}/USD</span>
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
        </Wrapper>
        
        {/* Version */}
        <Wrapper className={styles.versionContainer}>
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
        </Wrapper>
    </div>
    <TokenList openCoinList={openCoinList} setOpenCoinList={setOpenCoinList}/>
    </>
  )
}

export default ChartHeader 