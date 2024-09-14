import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAnalyticsBroken = ({
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
      strokeWidth={1.5}
      d="M3.75 18.78a2.111 2.111 0 1 1 4.223 0 2.111 2.111 0 0 1-4.223 0Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21.75 12.446v6.334a2.111 2.111 0 0 1-4.223 0V6.11a2.111 2.111 0 0 1 4.223 0v3.167M14.67 15.517v-3.263a2.111 2.111 0 1 0-4.223 0v6.526a2.111 2.111 0 1 0 4.223 0v-.672"
    />
  </Svg>
);
export default IconlystGoogleAnalyticsBroken;
