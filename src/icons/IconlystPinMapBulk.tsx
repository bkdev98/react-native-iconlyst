import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinMapBulk = ({
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
      d="m21.27 17.255-.93-4.65a3.46 3.46 0 0 0-3.38-2.77H7.04c-.45 0-.89.09-1.28.25l-.002.001 15.164 9.475c.378-.7.508-1.518.348-2.306"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.066 7.984a2.736 2.736 0 1 0-1.569-.007.8.8 0 0 0-.023.19v4.351a.807.807 0 0 0 1.613 0v-4.35a.8.8 0 0 0-.02-.184"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.44 11.032v.003c-.39.44-.66.97-.78 1.57l-.93 4.65c-.17.84-.01 1.71.42 2.44v.002l8.025-4.457z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m4.235 20.811.005.004c.55.37 1.2.56 1.87.56h11.78c.73 0 1.44-.23 2.02-.67.002 0 .005-.004.005-.004l-7.286-4.553z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinMapBulk;
