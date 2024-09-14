import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapBroken = ({
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
      d="M16.466 3c2.948 0 4.783 2.081 4.783 5.026v7.947c0 2.945-1.835 5.026-4.784 5.026H8.032c-2.948 0-4.782-2.08-4.782-5.026V8.026C3.25 5.081 5.093 3 8.032 3h4.217M9.012 8.21v10.201m-5.707-10.2H21.24"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.465 13.81c0 1.905 2.25 3.726 2.677 3.726s2.678-1.82 2.678-3.726a2.677 2.677 0 1 0-5.355 0M15.143 13.795v-.01"
    />
  </Svg>
);
export default IconlystMapBroken;
