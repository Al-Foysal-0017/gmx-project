import React from 'react'
import Link from 'next/link';
import styles from "./page.module.css"

const Home = () => {
  return (
    <div className={styles.dashboard}>
      <div>DASHBOARD</div>
      <Link href="/trade" className={styles.tardeLink}>
        Go to Trade
      </Link>
    </div>
  )
}

export default Home