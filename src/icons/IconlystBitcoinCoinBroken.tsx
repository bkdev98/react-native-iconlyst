import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinCoinBroken = ({
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
      d="M8.039 20.948a3.8 3.8 0 1 0-2.726-1.153M14.84 10.45H18.9a1.782 1.782 0 0 0 0-3.563c-1.117 0-2.235-.01-3.352 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.548 6.889h3.18a1.45 1.45 0 0 0-.019-2.899h-3.867M16.25 10.451v.934M18.73 10.451v.934M16.25 3.053v.936M18.73 3.053v.936M15.387 3.988v4.049M3.5 8.78a5.11 5.11 0 0 1 5.111-5.11l-.607 1.633M21.5 15.836a5.11 5.11 0 0 1-5.111 5.11l.607-1.632"
    />
  </Svg>
);
export default IconlystBitcoinCoinBroken;
