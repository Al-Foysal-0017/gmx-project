import React from 'react'
import Link from 'next/link';
import styles from "./page.module.css"
import PageLayout from '@/components/pageLayout/PageLayout';

const Home = () => {
  return (
    <PageLayout className={styles.dashboard}>
      <div>DASHBOARD</div>
      <Link href="/trade" className={styles.tradeLink}>
        Go to Trade
      </Link>
    </PageLayout>
  )
}

export default Home