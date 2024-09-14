import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboardCloseDownTwoTone = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.176 19.48 12.493 21l2.328-1.527"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.614 16.823H8.378c-2.866 0-4.641-1.598-4.632-4.535V7.545C3.746 4.607 5.521 3 8.386 3h8.228c2.858 0 4.642 1.636 4.642 4.619v4.669c0 2.938-1.784 4.535-4.642 4.535"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.245 13.213H9.754M7.51 6.859v-.022m0-.114a.113.113 0 1 0 0 .225.113.113 0 0 0 0-.225M14.156 6.859v-.022m0-.114a.113.113 0 1 0 0 .225.113.113 0 0 0 0-.225M10.834 6.859v-.022m0-.114a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M17.48 6.859v-.022m0-.114a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M12.496 9.66v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M9.172 9.66v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M15.818 9.66v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226"
    />
  </Svg>
);
export default IconlystKeyboardCloseDownTwoTone;
