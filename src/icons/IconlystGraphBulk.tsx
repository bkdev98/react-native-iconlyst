import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraphBulk = ({
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
      d="M12.501 2.505C7.262 2.505 3 6.767 3 12.005s4.262 9.5 9.501 9.5c5.237 0 9.499-4.261 9.499-9.5s-4.262-9.5-9.499-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m16.56 7.944.01-.01a.744.744 0 0 0-.004-1.056.754.754 0 0 0-1.065 1.066.747.747 0 0 0 1.06 0M13 17.892l2.5-2.15a.75.75 0 1 0-.977-1.136l-2.5 2.149A.75.75 0 1 0 13 17.892"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.129 10.774a3.74 3.74 0 0 1 3.736-3.74 3.74 3.74 0 0 1 3.737 3.74 3.738 3.738 0 0 1-7.473 0m3.736-2.24a2.24 2.24 0 0 1 2.237 2.24 2.236 2.236 0 0 1-4.473 0 2.24 2.24 0 0 1 2.236-2.24"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGraphBulk;
