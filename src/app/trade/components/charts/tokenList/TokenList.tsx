"use client"
import React, { useState } from 'react';
import styles from "./tokenList.module.css";
import Image from 'next/image';

const TokenList = ({openCoinList, setOpenCoinList}:any) => {
  const coinList = [
    {
        img:"https://app.gmx.io/static/media/ic_btc_24.f992927ad6d778bc91c8.svg",
        name:"BTC / USD",
        longLIQ:"3476347463",
        shortLIQ:"436746374",
    },
    {
        img:"https://app.gmx.io/static/media/ic_eth_24.6b1d8a1dc304aaaf675d.svg",
        name:"ETH / USD",
        longLIQ:"23728724",
        shortLIQ:"43764734",
    },
    {
        img:"https://app.gmx.io/static/media/ic_arb_24.93fe233c9499c66fc2c5.svg",
        name:"ARB / USD",
        longLIQ:"3647364743",
        shortLIQ:"9923274348",
    },
    {
        img:"https://app.gmx.io/static/media/ic_sol_24.f0bc1b9de518299feef2.svg",
        name:"SOL / USD",
        longLIQ:"354653443",
        shortLIQ:"4346536453",
    },
    {
        img:"https://app.gmx.io/static/media/ic_link_24.0d641e528c8033c8a3b7.svg",
        name:"LINK / USD",
        longLIQ:"4635463463",
        shortLIQ:"4346354635",
    },
    {
        img:"https://app.gmx.io/static/media/ic_xrp_24.28628b36afb7b75abcfb.svg",
        name:"XRP / USD",
        longLIQ:"232343535",
        shortLIQ:"768787878",
    },
    {
        img:"https://app.gmx.io/static/media/ic_uni_24.b248872a4099e58e051d.svg",
        name:"UNI / USD",
        longLIQ:"4343546",
        shortLIQ:"3535454",
    },
    {
        img:"https://app.gmx.io/static/media/ic_ltc_24.44a58d3d246d3154d677.svg",
        name:"LTC / USD",
        longLIQ:"232324345",
        shortLIQ:"989583975",
    },
    {
        img:"https://app.gmx.io/static/media/ic_doge_24.fd182cb93ddd2c8fe633.svg",
        name:"DOGE / USD",
        longLIQ:"53535435",
        shortLIQ:"343535353",
    },
  ];

  return (
    <>
    {openCoinList &&
    <div className={styles.container}>
      <div className={styles.searchInputContainer}>
        <input className={styles.searchInput} type='search' placeholder='Search Token' />
      </div>
      <div className={styles.coins}>
        <table className={styles.table}>
          <tr className={styles.tableRow}>
            <th className={styles.tableHead}>Market</th>
            <th className={styles.tableHead}>Long LIQ.</th>
            <th className={styles.tableHead}>Short LIQ.</th>
          </tr>
          {coinList.map((item, index)=>(
          <tr key={index} className={styles.tableRow}>
            <td className={styles.tableDataFirstCol}>
              <Image
                width={16}
                height={16}
                src={item.img}
                alt={item.name}
                className={styles.coinImg}
              />
              <span className={styles.coinName}>{item.name}</span>
            </td>
            <td className={styles.tableData}>{item.longLIQ}</td>
            <td className={styles.tableData}>{item.shortLIQ}</td>
          </tr>
          ))}
        </table>
      </div>
    </div>
    }
    </>
  );
};

export default TokenList;




// "use client"
// import React, { useState } from 'react';
// import styles from "./tokenList.module.css";
// import Image from 'next/image';

// const TokenList = ({openCoinList, setOpenCoinList}:any) => {
//   const coinList = [
//     {
//         img:"https://app.gmx.io/static/media/ic_btc_24.f992927ad6d778bc91c8.svg",
//         name:"BTC / USD",
//         longLIQ:"3476347463",
//         shortLIQ:"436746374",
//     },
//     {
//         img:"https://app.gmx.io/static/media/ic_eth_24.6b1d8a1dc304aaaf675d.svg",
//         name:"ETH / USD",
//         longLIQ:"23728724",
//         shortLIQ:"43764734",
//     },
//     {
//         img:"https://app.gmx.io/static/media/ic_arb_24.93fe233c9499c66fc2c5.svg",
//         name:"ARB / USD",
//         longLIQ:"3647364743",
//         shortLIQ:"9923274348",
//     },
//     {
//         img:"https://app.gmx.io/static/media/ic_sol_24.f0bc1b9de518299feef2.svg",
//         name:"SOL / USD",
//         longLIQ:"354653443",
//         shortLIQ:"4346536453",
//     },
//     {
//         img:"https://app.gmx.io/static/media/ic_link_24.0d641e528c8033c8a3b7.svg",
//         name:"LINK / USD",
//         longLIQ:"4635463463",
//         shortLIQ:"4346354635",
//     },
//     {
//         img:"https://app.gmx.io/static/media/ic_xrp_24.28628b36afb7b75abcfb.svg",
//         name:"XRP / USD",
//         longLIQ:"232343535",
//         shortLIQ:"768787878",
//     },
//     {
//         img:"https://app.gmx.io/static/media/ic_uni_24.b248872a4099e58e051d.svg",
//         name:"UNI / USD",
//         longLIQ:"4343546",
//         shortLIQ:"3535454",
//     },
//     {
//         img:"https://app.gmx.io/static/media/ic_ltc_24.44a58d3d246d3154d677.svg",
//         name:"LTC / USD",
//         longLIQ:"232324345",
//         shortLIQ:"989583975",
//     },
//     {
//         img:"https://app.gmx.io/static/media/ic_doge_24.fd182cb93ddd2c8fe633.svg",
//         name:"DOGE / USD",
//         longLIQ:"53535435",
//         shortLIQ:"343535353",
//     },
//   ];

//   return (
//     <>
//     {openCoinList &&
//     <div className={styles.container}>
//       <div className={styles.searchInputContainer}>
//         <input className={styles.searchInput} type='search' placeholder='Search Token' />
//       </div>
//       <div className={styles.coins}>
//         <table className={styles.table}>
//           <tr className={styles.tableRow}>
//             <th className={styles.tableHead}>Market</th>
//             <th className={styles.tableHead}>Long LIQ.</th>
//             <th className={styles.tableHead}>Short LIQ.</th>
//           </tr>
//           {coinList.map((item, index)=>(
//           <tr key={index} className={styles.tableRow}>
//             <td className={styles.tableDataFirstCol}>
//               <Image
//                 width={16}
//                 height={16}
//                 src={item.img}
//                 alt={item.name}
//                 className={styles.coinImg}
//               />
//               <span className={styles.coinName}>{item.name}</span>
//             </td>
//             <td className={styles.tableData}>{item.longLIQ}</td>
//             <td className={styles.tableData}>{item.shortLIQ}</td>
//           </tr>
//           ))}
//         </table>
//       </div>
//     </div>
//     }
//     </>
//   );
// };

// export default TokenList;
