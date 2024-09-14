import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMenu1Bulk = ({
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
      d="M3.98 17.286a.75.75 0 0 1-.75-.75V7.468a.75.75 0 0 1 1.5 0v9.068a.75.75 0 0 1-.75.75M21.98 17.286a.75.75 0 0 1-.75-.75V7.468a.75.75 0 0 1 1.5 0v9.068a.75.75 0 0 1-.75.75"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M9.986 20.502h5.94a3.605 3.605 0 0 0 3.6-3.601v-.606a.3.3 0 0 0-.3-.3H6.684a.3.3 0 0 0-.3.3v.605a3.605 3.605 0 0 0 3.602 3.602M6.684 14.495a.3.3 0 0 1-.3-.3V7.1a3.605 3.605 0 0 1 3.602-3.601h5.94a3.605 3.605 0 0 1 3.6 3.6v7.096a.3.3 0 0 1-.3.3z" />
    </G>
  </Svg>
);
export default IconlystMenu1Bulk;
