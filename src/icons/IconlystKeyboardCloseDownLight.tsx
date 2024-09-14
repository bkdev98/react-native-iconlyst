import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboardCloseDownLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.676 19.48 11.993 21l2.328-1.527M16.114 16.823H7.878c-2.866 0-4.641-1.598-4.632-4.535V7.545C3.246 4.607 5.021 3 7.886 3h8.228c2.858 0 4.642 1.636 4.642 4.619v4.669c0 2.938-1.784 4.535-4.642 4.535M14.745 13.213H9.254"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.01 6.859v-.022m0-.114a.113.113 0 1 0 0 .225.113.113 0 0 0 0-.225M13.656 6.859v-.022m0-.114a.113.113 0 1 0 0 .225.113.113 0 0 0 0-.225M10.334 6.859v-.022m0-.114a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M16.98 6.859v-.022m0-.114a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M11.996 9.66v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M8.672 9.66v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M15.318 9.66v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226"
    />
  </Svg>
);
export default IconlystKeyboardCloseDownLight;
