import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBroomOutline = ({
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
      d="M18.458 14.015H6.228a2.528 2.528 0 0 1 0-5.055H9.48l-.43-3.558a1 1 0 0 1-.006-.091 3.292 3.292 0 0 1 6.583 0l-.43 3.658 3.255-.006a2.526 2.526 0 1 1 0 5.052zM6.23 10.46a1.027 1.027 0 1 0 0 2.054h12.228a1.03 1.03 0 0 0 1.027-1.026 1.026 1.026 0 0 0-1.025-1.026l-4.1.007a.75.75 0 0 1-.745-.84l.524-4.408a1.8 1.8 0 0 0-3.588.048c.053.436.446 3.664.525 4.354a.75.75 0 0 1-.745.836z"
    />
    <Path
      fill={props.color}
      d="M10.952 21.526c-3.147 0-5.94 0-6.005-.016a1.53 1.53 0 0 1-1.115-.9 1.51 1.51 0 0 1 .12-1.382 5.77 5.77 0 0 0 .907-3.37v-2.434a.75.75 0 1 1 1.5 0v2.405a7.24 7.24 0 0 1-1.118 4.17v.018h14.217a7.2 7.2 0 0 1-1.13-4.22v-2.373a.75.75 0 0 1 1.5 0v2.405a5.8 5.8 0 0 0 .872 3.349 1.54 1.54 0 0 1 .154 1.432 1.51 1.51 0 0 1-1.065.886c-.092.02-4.761.03-8.837.03"
    />
    <Path
      fill={props.color}
      d="M8.425 21.52a.75.75 0 0 1-.616-1.177 5.5 5.5 0 0 0 .932-2.416.752.752 0 1 1 1.5.11 6.94 6.94 0 0 1-1.2 3.16.75.75 0 0 1-.616.323M14.63 21.521a.75.75 0 0 1-.717-.528 5 5 0 0 1-.193-2 .75.75 0 0 1 1.492.146c-.052.474-.006.953.135 1.407a.754.754 0 0 1-.717.975"
    />
  </Svg>
);
export default IconlystBroomOutline;
