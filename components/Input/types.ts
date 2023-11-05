export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
  id?: string;
  htmlFor?: string;
  label?: string;
}

// mb?: string;
// min?: number;
// max?: number;
// tags?: string[] | { value: string; id: number }[];
// setTags?: { setCta_tags: any; cta_type: string };
// showCross?: boolean;
// step?: number;
// currency?: boolean;
// discount?: boolean;
// addonBefore?: React.ReactNode;
// addonAfter?: React.ReactNode;
// addOnBorderRight?: boolean;
// addOnBorderLeft?: boolean;
// minOneTagRequired?: boolean;
// showRequiredStar?: boolean;
// onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
// onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
// onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
// clearSearch?: () => void;
// onChangeFormatted?: (value: string, name: string) => void;
