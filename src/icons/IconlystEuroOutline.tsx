import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEuroOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.968 9.592a5.51 5.51 0 0 1 5-2.775.75.75 0 1 0 .059-1.5 7.01 7.01 0 0 0-6.363 3.534l-.002.003a6.53 6.53 0 0 0 0 6.417l.002.003a7.01 7.01 0 0 0 6.363 3.533.75.75 0 1 0-.059-1.499 5.51 5.51 0 0 1-5-2.775 5.03 5.03 0 0 1 0-4.94"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.752 13.824a.75.75 0 0 1 .75-.75h6.996a.75.75 0 0 1 0 1.5H8.502a.75.75 0 0 1-.75-.75M7.752 10.303a.75.75 0 0 1 .75-.75h6.996a.75.75 0 0 1 0 1.5H8.502a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEuroOutline;
