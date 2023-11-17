import React, { useCallback } from 'react'
import { RxCross2 } from 'react-icons/rx';
import styles from "./tokenModel.module.css"
import Image from 'next/image'
import useTokenModel from '@/hooks/useTokenModel';
import useInputValuesStore from '@/hooks/useCurrentToken';
import coinList from './data';

const TokenModel = () => {
  const tokenModal = useTokenModel();
  const modelCloseSubmit = useCallback(async () => {
    tokenModal.onClose();
  }, [tokenModal]);

  const { setInput1Value, setInput2Value } = useInputValuesStore();

  const handleCoinClick = (coin: any) => {
    if (tokenModal.updateInput === "input1") {
      setInput1Value({
        img: coin.img,
        token_name_short: coin.shortName,
        token_name_full: coin.name,
      });
    } else if (tokenModal.updateInput === "input2") {
      setInput2Value({
        img: coin.img,
        token_name_short: coin.shortName,
        token_name_full: coin.name,
      });
    }
    modelCloseSubmit();
  };
    
  return (
    <div className={styles.container}>
        <div className={styles.model}>
            <div className={styles.header}>
                <span>Pay</span>
                <span onClick={modelCloseSubmit} className={styles.dismiss}><RxCross2 size={24}/></span>
            </div>
            <div className={styles.searchInputContainer}>
                <input className={styles.searchInput} type='search' placeholder='Search Token'/>
            </div>
            <div className='divider'/>
            <div className={styles.coins}>
                {coinList.map((coin, index)=>(
                    <div key={index} onClick={() => {handleCoinClick(coin); modelCloseSubmit();}} className={styles.coin}>
                        <Image 
                            width={40} 
                            height={40} 
                            src={coin.img}
                            alt={coin.shortName}
                            className={styles.coinImg}
                        />
                        <div className={styles.coinDesc}>
                            <div className={styles.coinNameShort}>{coin.shortName}</div>
                            <div className={styles.coinName}>{coin.name}</div>
                        </div>
                    </div>
                ))}
                <div className={styles.extraPadding} />
            </div>
        </div>
    </div>
  )
}

export default TokenModel