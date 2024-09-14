import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGooglePhotosOutline = ({
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
      d="M2.25 10.746a5.25 5.25 0 0 1 10.5 0V12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm5.25-3.75a3.75 3.75 0 0 0-3.75 3.75v.504h7.5v-.504a3.75 3.75 0 0 0-3.75-3.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.47 11.47a.75.75 0 0 1 .53-.22h9a.75.75 0 0 1 .75.75v1.255a5.25 5.25 0 0 1-10.5 0V12a.75.75 0 0 1 .22-.53m1.28 1.28v.505a3.75 3.75 0 0 0 7.5 0v-.504z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.494 16.5c0-2.9 2.351-5.25 5.25-5.25h1.254a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-1.254a5.25 5.25 0 0 1-5.25-5.25m5.25-3.75a3.75 3.75 0 0 0 0 7.5h.504v-7.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.25 3a.75.75 0 0 1 .75-.75h1.254a5.25 5.25 0 0 1 0 10.5H12a.75.75 0 0 1-.75-.75zm1.5.75v7.5h.504a3.75 3.75 0 0 0 0-7.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGooglePhotosOutline;
