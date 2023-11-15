"use client"
import React from 'react'
import styles from "./inputField.module.css"
import useTokenModel from '@/hooks/useTokenModel';
import Image from 'next/image';
import { BsChevronDown } from 'react-icons/bs';
import { HiMiniArrowsUpDown } from 'react-icons/hi2';
import useLongShortSwap from '@/hooks/useLongShortSwap';
import useInputValuesStore from '@/hooks/useCurrentToken';

interface InputState {
    value: string;
    img: string;
    token_name_short: string;
    token_name_full: string;
}

const InputField = () => {
    const { onOpen } = useTokenModel();
    const {currentStatus} = useLongShortSwap();

    const { input1Value, input2Value, setInput1Value, setInput2Value } = useInputValuesStore();

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setInputValue: (newInputValue: Partial<InputState>) => void
    ) => {
        const newValue = e.target.value;
        setInputValue({ value: newValue });
    };

    const toogleInputValues = () => {
        const tempInput1Value = { ...input1Value };
        setInput1Value({ ...input2Value });
        setInput2Value({ ...tempInput1Value });
      };

  return (
    <>
    {/* FIRST INPUT FIELD */}
    <div className={styles.container}>
        <div className={styles.headerRow}>
            <span>Pay</span>
            <span>Balance</span>
        </div>
        <div className={styles.inputRow}>
            <input
                type='number'
                placeholder='0.0'
                className={styles.input}
                name='value'
                value={input1Value.value}
                onChange={(e) => handleInputChange(e, setInput1Value)}
            />
            <span onClick={() => onOpen("input1")} className={styles.coinBox}>
                <Image
                    width={20} 
                    height={20} 
                    src={input1Value.img}
                    alt={input1Value.token_name_short}
                    className={styles.logo}
                />
                <span className={styles.coinName}>{input1Value.token_name_short}</span>
                <BsChevronDown size={18} className={styles.icon}/>
            </span>
        </div>
    </div>
    {/* SWIPPER BUTTON */}
    <div className={styles.swiper}/>
    <div className={styles.swipperBtnContainer}>
            <div className={styles.swipperBtn} onClick={toogleInputValues}>
                <HiMiniArrowsUpDown size={18}/>
            </div>
    </div>
    {/* SECOND INPUT FIELD */}
    <div className={styles.container}>
        <div className={styles.headerRow}>
            <span>{currentStatus==="long" && "Long" || currentStatus==="short" && "Short" || currentStatus==="swap" && "Receive"}</span>
            <span>Leverage</span>
        </div>
        <div className={styles.inputRow}>
            <input
                type='number'
                placeholder='0.0'
                className={styles.input}
                name='value'
                value={input2Value.value}
                onChange={(e) => handleInputChange(e, setInput2Value)}
            />
            <span onClick={() => onOpen("input2")} className={styles.coinBox}>
                <Image
                    width={20} 
                    height={20} 
                    src={input2Value.img}
                    alt={input2Value.token_name_short}
                    className={styles.logo}
                />
                <span className={styles.coinName}>{input2Value.token_name_short}</span>
                <BsChevronDown size={18} className={styles.icon}/>
            </span>
        </div>
    </div>
    </>
  )
}

export default InputField




