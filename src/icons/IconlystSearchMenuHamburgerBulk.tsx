import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchMenuHamburgerBulk = ({
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
      d="M5.402 15.67H2.9a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5M5.774 6.111H2.9a.75.75 0 0 0 0 1.5h2.873a.75.75 0 0 0 0-1.5M2.9 12.371H4.33a.75.75 0 0 0 0-1.5H2.9a.75.75 0 0 0 0 1.5M21.618 18.13l-1.561-1.557a.787.787 0 0 0-1.111 1.115l1.56 1.556a.787.787 0 1 0 1.112-1.114"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.86 4.525a6.623 6.623 0 0 0-6.622 6.625 6.623 6.623 0 1 0 13.245 0 6.624 6.624 0 0 0-6.623-6.625"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSearchMenuHamburgerBulk;
