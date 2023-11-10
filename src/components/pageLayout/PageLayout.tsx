import React, { ReactNode } from 'react';
import styles from "./pageLayout.module.css"

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className={styles.pageLayout}>
      <main>{children}</main>
    </div>
  );
};

export default PageLayout;
