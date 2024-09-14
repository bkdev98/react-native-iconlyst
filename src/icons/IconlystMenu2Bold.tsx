import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMenu2Bold = ({
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
      d="M9.988 20.502h5.94a3.605 3.605 0 0 0 3.6-3.601V7.1a3.605 3.605 0 0 0-3.6-3.601h-5.94a3.605 3.605 0 0 0-3.601 3.6v9.802a3.605 3.605 0 0 0 3.6 3.6M3.23 16.536a.75.75 0 0 0 1.5 0V7.468a.75.75 0 0 0-1.5 0zM21.23 16.536a.75.75 0 0 0 1.5 0V7.468a.75.75 0 0 0-1.5 0z"
    />
  </Svg>
);
export default IconlystMenu2Bold;
