import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldWifiBulk = ({
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
      d="M19.356 5.136C18.65 4.43 13.024 2.5 12 2.5S5.349 4.43 4.644 5.137c-.561.562-.553.995-.51 3.398.018.973.043 2.299.043 4.134 0 6.408 7.6 8.786 7.678 8.809a.48.48 0 0 0 .29 0c.077-.023 7.679-2.401 7.679-8.809 0-1.831.024-3.155.04-4.128.045-2.408.053-2.841-.508-3.405"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.417 11.257a.752.752 0 0 0 .47-1.335c-2.253-1.807-5.523-1.809-7.778 0a.75.75 0 1 0 .94 1.17 4.74 4.74 0 0 1 5.898 0 .75.75 0 0 0 .47.165"
    />
    <Path
      fill={props.color}
      d="M13.259 13.19a.75.75 0 0 0 .969-1.145 3.43 3.43 0 0 0-4.454.001.75.75 0 0 0 .973 1.143 1.96 1.96 0 0 1 2.512.001M11.999 15.468a.75.75 0 0 0 .75-.75v-.04a.733.733 0 0 0-.75-.73c-.414 0-.75.356-.75.77s.336.75.75.75"
    />
  </Svg>
);
export default IconlystShieldWifiBulk;
