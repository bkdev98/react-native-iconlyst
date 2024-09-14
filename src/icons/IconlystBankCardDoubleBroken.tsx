import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardDoubleBroken = ({
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
      d="M17.54 7.932h.565c1.939 0 3.144 1.365 3.144 3.305v5.236c0 1.93-1.205 3.305-3.144 3.305M6.955 16.066v.405c0 1.93 1.214 3.305 3.155 3.305h4.656"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.396 4.22h3.998c1.94 0 3.147 1.37 3.147 3.309v5.23c0 1.939-1.207 3.309-3.148 3.309H6.398c-1.94 0-3.148-1.37-3.148-3.308V7.529c0-1.938 1.213-3.308 3.148-3.308h.815M3.25 8.426h11.079"
    />
  </Svg>
);
export default IconlystBankCardDoubleBroken;
