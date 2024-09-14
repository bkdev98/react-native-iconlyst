import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayStandOutline = ({
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
      d="M2.5 6.29a3.757 3.757 0 0 1 3.757-3.757h11.987A3.757 3.757 0 0 1 22 6.29v7.5a3.757 3.757 0 0 1-3.756 3.758H6.257A3.76 3.76 0 0 1 2.5 13.79zm3.757-2.257A2.257 2.257 0 0 0 4 6.29v7.5a2.26 2.26 0 0 0 2.257 2.258h11.987A2.257 2.257 0 0 0 20.5 13.79v-7.5a2.257 2.257 0 0 0-2.256-2.257zM7.555 20.717a.75.75 0 0 1 .75-.75h7.89a.75.75 0 0 1 0 1.5h-7.89a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 16.254a.75.75 0 0 1 .75.75v3.713a.75.75 0 0 1-1.5 0v-3.713a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplayStandOutline;
