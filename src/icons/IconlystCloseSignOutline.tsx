import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloseSignOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.263 4.28a2.03 2.03 0 1 1 3.934.706l3.04 3.225c1.087.07 2.02.497 2.694 1.222.735.789 1.108 1.868 1.108 3.06v4.964c0 1.193-.373 2.273-1.108 3.061-.74.795-1.79 1.232-3.014 1.232H7.08c-1.224 0-2.273-.437-3.013-1.232-.734-.788-1.107-1.868-1.107-3.06v-4.964c0-1.194.375-2.273 1.11-3.061C4.81 8.639 5.86 8.2 7.08 8.2h.271l3.038-3.215a2 2 0 0 1-.127-.706m1.658.377a1 1 0 0 0-.064-.077.53.53 0 1 1 .065.077M11.4 6.102l-1.983 2.1h5.75l-1.978-2.1a2.02 2.02 0 0 1-1.789 0m-6.231 4.354c-.433.464-.707 1.156-.707 2.038v4.963c0 .884.273 1.575.705 2.04.426.457 1.062.753 1.915.753h9.836c.854 0 1.49-.296 1.916-.754.433-.464.706-1.155.706-2.039v-4.963c0-.883-.273-1.575-.705-2.039-.427-.458-1.063-.754-1.916-.754H7.08c-.85 0-1.486.296-1.913.755"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.43 12.293a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M14.57 12.293a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M14.14 18.038a.75.75 0 0 1-1.056-.102 1.45 1.45 0 0 0-1.126-.532c-.453 0-.857.206-1.126.532a.75.75 0 0 1-1.157-.954 2.95 2.95 0 0 1 2.283-1.078c.92 0 1.742.421 2.284 1.078a.75.75 0 0 1-.102 1.056"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloseSignOutline;
