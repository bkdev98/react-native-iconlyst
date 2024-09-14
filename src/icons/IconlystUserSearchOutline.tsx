import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserSearchOutline = ({
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
      d="M18.563 15.786a1.951 1.951 0 1 0-2.76 2.76 1.951 1.951 0 0 0 2.76-2.76m-3.82-1.06a3.451 3.451 0 0 1 5.353 4.292l.991.99a.75.75 0 0 1-1.06 1.062l-.991-.991a3.453 3.453 0 0 1-4.293-5.353M10.734 4.21a3.95 3.95 0 1 0 0 7.902 3.95 3.95 0 0 0 0-7.901m-5.45 3.952a5.45 5.45 0 1 1 10.9 0 5.45 5.45 0 0 1-10.9 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.504 17.543a5.15 5.15 0 0 1 5.149-5.148h4.283q.572 0 1.112.12a.75.75 0 0 1-.323 1.465 3.7 3.7 0 0 0-.79-.085H8.654a3.65 3.65 0 0 0-3.65 3.648q0 .262-.004.497c-.008.487-.014.9.059 1.32a.75.75 0 0 1-1.478.256c-.1-.572-.09-1.177-.08-1.69q.003-.202.004-.383"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserSearchOutline;
