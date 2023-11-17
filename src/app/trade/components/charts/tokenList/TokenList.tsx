"use client"
import React from 'react';
import styles from "./tokenList.module.css";
import Image from 'next/image';
import Wrapper from '@/components/Wrapper/Wrapper';
import useCurrentToken from '@/hooks/useCurrentToken';
import coinList from './data';

const TokenList = ({openCoinList, setOpenCoinList}:any) => {
  const {setInput2Value} = useCurrentToken();

  const handleTokenClick = (token: any) => {
    setInput2Value({
      img: token.img,
      token_name_short: token.shortName,
      token_name_full: token.name,
    });
    setOpenCoinList(!openCoinList)
  };

  return (
    <>
    {openCoinList &&
    <div className={styles.container}>
      <Wrapper upPadding='0' bottomPadding='0'>
        <input className={styles.searchInput} type='search' placeholder='Search Token' />
      </Wrapper>
      <Wrapper className={styles.coins}>
        <table className={styles.table}>
          <tr className={styles.tableRow}>
            <th className={styles.tableHead}>Market</th>
            <th className={styles.tableHead}>Long LIQ.</th>
            <th className={styles.tableHead}>Short LIQ.</th>
          </tr>
          {coinList.map((item, index)=>(
          <tr onClick={() => {handleTokenClick(item)}} key={index} className={styles.tableRow}>
            <td className={styles.tableDataFirstCol}>
              <Image
                width={16}
                height={16}
                src={item.img}
                alt={item.shortName}
                className={styles.coinImg}
              />
              <span className={styles.coinName}>{`${item.shortName} / USD`}</span>
            </td>
            <td className={styles.tableData}>{item.longLIQ}</td>
            <td className={styles.tableData}>{item.shortLIQ}</td>
          </tr>
          ))}
        </table>
      </Wrapper>
    </div>
    }
    </>
  );
};

export default TokenList;
