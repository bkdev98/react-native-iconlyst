import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEnjinBulk = ({
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
      d="M16.717 2.505H8.282C5.123 2.505 3 4.727 3 8.035v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53v-7.94c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.57 12.005a.75.75 0 0 0-.75-.75H9.014a2.496 2.496 0 0 1 2.48-2.29h4.328a.75.75 0 0 0 0-1.5h-4.327a4.005 4.005 0 0 0-4.002 4v1.08c0 2.206 1.795 4 4.002 4h4.327a.75.75 0 0 0 0-1.5h-4.327a2.496 2.496 0 0 1-2.481-2.29h6.808a.75.75 0 0 0 .75-.75"
    />
  </Svg>
);
export default IconlystEnjinBulk;
