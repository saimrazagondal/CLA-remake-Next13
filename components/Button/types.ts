export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  loading?: boolean;
  style?: any;
  text?: string;
  onClick?: () => void;
  mt?: string;
  mb?: string;
  mr?: string;
  ml?: string;
  children?: React.ReactNode | string;
}
