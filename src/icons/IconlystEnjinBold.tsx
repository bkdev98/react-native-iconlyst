import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEnjinBold = ({
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
      d="M15.321 11.255a.75.75 0 0 1 0 1.5H8.513a2.496 2.496 0 0 0 2.481 2.29h4.327a.75.75 0 0 1 0 1.5h-4.327a4.005 4.005 0 0 1-4.002-4v-1.08c0-2.206 1.795-4 4.002-4h4.327a.75.75 0 0 1 0 1.5h-4.327a2.496 2.496 0 0 0-2.48 2.29zm.896-8.75H7.782c-3.159 0-5.282 2.222-5.282 5.53v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53v-7.94c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEnjinBold;
