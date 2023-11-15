import React, { ReactNode } from 'react';
import styles from "./wrapper.module.css"

interface WrapperProps {
  children: ReactNode;
  padding?: string;
  upPadding?: string;
  bottomPadding?: string;
  upMargin?: string; 
  bottomMargin?: string; 
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  padding = '1rem',
  upPadding,
  bottomPadding,
  upMargin,
  bottomMargin, 
  className
}) => {
  return (
    <div
      style={{
        padding,
        ...(upPadding && { paddingTop: upPadding }),
        ...(bottomPadding && { paddingBottom: bottomPadding }),
        ...(upMargin && { marginTop: upMargin }),
        ...(bottomMargin && { marginBottom: bottomMargin }),
      }}
      className={`${styles.pageLayout} ${className || ''}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
