import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransactionsDownBold = ({
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
      d="M17.218 15.03h-.001a.75.75 0 0 1-.75-.749l-.001-.816-3.467 3.615a.75.75 0 0 1-.533.23h-.008a.76.76 0 0 1-.53-.218l-1.702-1.701-1.911 1.918a.746.746 0 0 1-1.061.002.75.75 0 0 1-.002-1.06l2.441-2.45a.75.75 0 0 1 .53-.221h.001c.198 0 .39.079.53.219l1.693 1.69 3.003-3.133-.912.004h-.003a.75.75 0 0 1-.003-1.5l2.665-.011h.016c.03 0 .057.014.087.017.065.008.131.014.193.039.041.016.074.047.112.071.044.027.091.045.13.082l.004.007.003.002c.019.019.028.045.045.066.11.136.175.297.176.464l.004 2.682a.75.75 0 0 1-.749.751M8.309 9.9h2.723a.75.75 0 1 1 0 1.5H8.309a.75.75 0 0 1 0-1.5m0-3.431h7.299a.75.75 0 0 1 0 1.5H8.309a.75.75 0 1 1 0-1.5M16.474 2.5H8.527C5.221 2.5 3 4.622 3 7.78v8.439C3 19.378 5.221 21.5 8.527 21.5h7.947C19.78 21.5 22 19.378 22 16.219V7.78c0-3.158-2.22-5.28-5.526-5.28"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransactionsDownBold;
