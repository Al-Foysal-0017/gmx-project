import React, { ReactNode } from 'react';
import styles from './pageLayout.module.css';

interface PageLayoutProps {
  children: ReactNode;
  className?: string; 
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <div className={`${styles.pageLayout} ${className || ''}`}>
      <main>{children}</main>
    </div>
  );
};

export default PageLayout;

