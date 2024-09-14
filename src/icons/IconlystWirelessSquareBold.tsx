import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessSquareBold = ({
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
      d="M17.331 10.881a.75.75 0 0 1-1.06.037A6.18 6.18 0 0 0 12.04 9.25a6.14 6.14 0 0 0-4.221 1.666.75.75 0 1 1-1.027-1.094A7.64 7.64 0 0 1 12.04 7.75a7.67 7.67 0 0 1 5.254 2.071.75.75 0 0 1 .037 1.06m-1.893 2.56a.75.75 0 0 1-1.06.037c-1.267-1.181-3.393-1.188-4.667 0a.75.75 0 0 1-1.023-1.097 4.9 4.9 0 0 1 3.352-1.322 4.9 4.9 0 0 1 3.361 1.322.75.75 0 0 1 .037 1.06m-1.87 2.58a.75.75 0 0 1-1.061.018c-.239-.232-.682-.233-.926 0a.75.75 0 1 1-1.042-1.079c.804-.775 2.209-.773 3.01 0a.75.75 0 0 1 .019 1.061M16.26 2.5H7.826c-3.16 0-5.283 2.222-5.283 5.529v7.94c0 3.308 2.123 5.531 5.283 5.531h8.433c3.161 0 5.284-2.223 5.284-5.531v-7.94c0-3.307-2.123-5.529-5.283-5.529"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessSquareBold;
