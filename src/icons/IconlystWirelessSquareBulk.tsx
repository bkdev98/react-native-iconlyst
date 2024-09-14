import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessSquareBulk = ({
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
      d="M16.26 2.5H7.826c-3.16 0-5.283 2.222-5.283 5.529v7.94c0 3.308 2.123 5.531 5.283 5.531h8.433c3.161 0 5.284-2.223 5.284-5.531v-7.94c0-3.307-2.123-5.529-5.283-5.529"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.783 11.119a.75.75 0 0 0 .51-1.298A7.67 7.67 0 0 0 12.04 7.75c-1.96 0-3.824.736-5.248 2.072a.75.75 0 0 0 1.027 1.094 6.14 6.14 0 0 1 4.22-1.666c1.578 0 3.08.592 4.232 1.668a.75.75 0 0 0 .512.201"
    />
    <Path
      fill={props.color}
      d="M14.89 13.679a.75.75 0 0 0 .51-1.298 4.9 4.9 0 0 0-3.36-1.322 4.9 4.9 0 0 0-3.352 1.322.75.75 0 0 0 1.023 1.097c1.274-1.188 3.4-1.181 4.667 0a.75.75 0 0 0 .512.201M13.028 16.25a.75.75 0 0 0 .52-1.29c-.8-.773-2.205-.775-3.01 0a.751.751 0 0 0 1.043 1.079c.244-.233.687-.232.926 0a.75.75 0 0 0 .52.211"
    />
  </Svg>
);
export default IconlystWirelessSquareBulk;
