import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCupLight = ({
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
      d="M11.996 14.637v2.697m-3.98 2.773.887-2.773h6.337l.887 2.773m1.617 0H6.4m11.65-16.216H5.95s.007 10.746 6.053 10.746c6.048 0 6.048-10.746 6.048-10.746"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.054 5.652h-3.03s-.427 3.799 2.378 5.646M17.945 5.652h3.031s.426 3.799-2.379 5.646"
    />
  </Svg>
);
export default IconlystCupLight;
