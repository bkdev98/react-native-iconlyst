import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinSwapBold = ({
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
      d="M7.012 13.01c-2.215 0-4.01 1.8-4.01 4.01s1.795 4.01 4.01 4.01 4.01-1.8 4.01-4.01-1.796-4.01-4.01-4.01M20.998 7.04c0-2.21-1.796-4.01-4.01-4.01s-4.01 1.8-4.01 4.01 1.796 4.01 4.01 4.01c2.215 0 4.01-1.8 4.01-4.01M3.752 8.42A4.64 4.64 0 0 1 6.25 4.304l.975.974c.18.181.435.256.69.202a.75.75 0 0 0 .543-.47l.64-1.72a.75.75 0 0 0-.703-1.012 6.15 6.15 0 0 0-6.143 6.14.75.75 0 0 0 1.5 0M20.998 14.82a.75.75 0 0 0-.75.75 4.66 4.66 0 0 1-2.53 4.139.7.7 0 0 0-.132-.18l-.811-.81a.751.751 0 0 0-1.233.269l-.641 1.72a.75.75 0 0 0 .703 1.01c3.388 0 6.144-2.757 6.144-6.148a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoinSwapBold;
