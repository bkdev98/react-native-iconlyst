import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletOutlinesharp = ({
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
      d="M17.806 11.028h4.824v1.5h-4.824m0 0c-1.15 0-1.96.833-1.96 1.716.001.883.81 1.715 1.96 1.716h4.824v1.5h-4.824c-1.842-.002-3.458-1.375-3.46-3.216 0-1.841 1.619-3.215 3.46-3.216"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M1.87 4.976h20.76V22H1.87zm1.5 1.5V20.5h17.76V6.476z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M1.87 2h18.128v4.378h-1.5V3.501L3.37 3.5V22h-1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.434 9.544h6.933v1.5H6.434z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletOutlinesharp;
