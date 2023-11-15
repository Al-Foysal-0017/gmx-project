import React, { useCallback } from 'react'
import { RxCross2 } from 'react-icons/rx';
import styles from "./tokenModel.module.css"
import Image from 'next/image'
import useTokenModel from '@/hooks/useTokenModel';
import useInputValuesStore from '@/hooks/useCurrentToken';

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
    
    const coinList = [
        {
            name: "Bitcoin (WBTC)",
            shortName: "BTC",
            img:"https://app.gmx.io/static/media/ic_btc_40.1560513c6c41f919ca40.svg"
        },
        {
            name: "Ethereum",
            shortName: "ETH",
            img:"https://app.gmx.io/static/media/ic_eth_40.5e255508ace6905c4815.svg"
        },
        {
            name: "Wrapped Ethereum",
            shortName: "WETH",
            img:"https://app.gmx.io/static/media/ic_weth_40.334ca16a5ef5109a3a56.svg"
        },
        {
            name: "USD Coin",
            shortName: "USDC",
            img:"https://app.gmx.io/static/media/ic_usdc_40.27f415ba778073d06aca.svg"
        },
        {
            name: "Arbitrum",
            shortName: "ARB",
            img:"https://app.gmx.io/static/media/ic_arb_40.2a0fdde6acf751a3c4be.svg"
        },
        {
            name: "Chainlink",
            shortName: "LINK",
            img:"https://app.gmx.io/static/media/ic_link_40.4bb3a0488a0125447a25.svg"
        },
        {
            name: "Wrapped SOL (Wormhole)",
            shortName: "SOL",
            img:"https://app.gmx.io/static/media/ic_sol_40.ec22fb74c576aaa36120.svg"
        },
        {
            name: "Uniswap",
            shortName: "UNI",
            img:"https://app.gmx.io/static/media/ic_uni_40.1f55c4f7e3c230ab403f.svg"
        },
        {
            name: "Bridged USDC (USDC.e)",
            shortName: "USDC.e",
            img:"https://app.gmx.io/static/media/ic_usdc.e_40.27f415ba778073d06aca.svg"
        },
        {
            name: "Tether",
            shortName: "USDT",
            img:"https://app.gmx.io/static/media/ic_usdt_40.e357d24af30ac5192cd1.svg"
        },
        {
            name: "Dai",
            shortName: "DAI",
            img:"https://app.gmx.io/static/media/ic_dai_40.6f901476bbc7ae3d392c.svg"
        },
    ]
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