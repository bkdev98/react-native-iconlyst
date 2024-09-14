import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryClockTimeBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M18.65 11.143c.85 0 1.657.166 2.4.464.206.083.44-.064.439-.286l-.01-4.008c0-1.64-.55-3.09-1.54-4.08-.95-.93-2.23-1.43-3.72-1.43h-.339a.3.3 0 0 0-.3.3l.02 7.84c0 .24-.12.47-.31.61-.2.14-.45.18-.68.11l-2.59-.85-2.62.86c-.07.03-.15.04-.23.04a.74.74 0 0 1-.75-.75l-.01-7.84a.3.3 0 0 0-.3-.3h-.34c-1.58 0-2.9.56-3.82 1.54-.92.96-1.45 2.34-1.45 3.99l.02 7.94c.01 1.59.5 2.96 1.43 3.95.95 1.02 2.28 1.56 3.84 1.56h.02l4.644-.01c.228 0 .374-.245.28-.452a6.5 6.5 0 0 1 5.916-9.198"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.78 8.312a.75.75 0 0 1 .466-.001l1.848.6-.012-6.801a.3.3 0 0 0-.3-.3l-3.575.008a.3.3 0 0 0-.3.3l.008 6.809zM18.65 20.697a3.054 3.054 0 0 1-3.05-3.05 3.054 3.054 0 0 1 3.05-3.05 3.05 3.05 0 0 1 3.05 3.05 3.05 3.05 0 0 1-3.05 3.05m0-7.6a4.556 4.556 0 0 0-4.55 4.55 4.556 4.556 0 0 0 4.55 4.55 4.555 4.555 0 0 0 4.55-4.55 4.555 4.555 0 0 0-4.55-4.55"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.17 16.122-1.035.98a.75.75 0 0 0 1.031 1.09l1.035-.98a.751.751 0 0 0-1.031-1.09"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryClockTimeBulk;
