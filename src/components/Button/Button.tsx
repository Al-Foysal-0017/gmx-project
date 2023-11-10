import styles from "./button.module.css"

interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    // onClick: () => void;
    disabled?: boolean;
    outline?: boolean;
}
  
const Button: React.FC<ButtonProps> = ({ 
    label, 
    secondary, 
    fullWidth, 
    // onClick, 
    large, 
    disabled, 
    outline 
  }) => {
    return ( 
      <button
        disabled={disabled}
        // onClick={onClick}
        className={`
            ${styles.button} 
            ${disabled && styles.disabled} 
            ${fullWidth && styles.fullWidth} 
            ${secondary && styles.secondary} 
            ${large && styles.large} 
            ${outline && styles.outline} 
        `}
      >
        {label}
      </button>
     );
  }
   
export default Button;

