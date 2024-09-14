import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallHelpBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.058 15.875c7.829 7.827 10.056 4.436 10.408 4.155 2.798-2.799 1.528-3.241-.681-5.45-2.292-2.29-3.362 2.127-6.961-1.471s.815-4.671-1.476-6.963c-2.21-2.208-2.645-3.485-5.45-.68-.25.311-2.937 2.098 1.898 7.944M16.58 9.533v.044M16.579 7.436c-.009-.665.596-.946 1.045-1.202.549-.303.92-.784.92-1.452 0-.989-.8-1.782-1.782-1.782-.99 0-1.783.793-1.783 1.782"
    />
  </Svg>
);
export default IconlystPhoneCallHelpBroken;
