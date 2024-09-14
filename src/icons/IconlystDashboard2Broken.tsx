import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard2Broken = ({
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
      d="M12.23 3a9 9 0 1 0 3.375.654"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.541 12a1.31 1.31 0 1 0-1.31 1.31M13.303 11.1l2.503-2.504M7.074 12a5.155 5.155 0 0 1 5.155-5.154M17.385 12a5.155 5.155 0 0 1-5.155 5.155M9.241 16.2a5.2 5.2 0 0 1-1.095-1.053"
    />
  </Svg>
);
export default IconlystDashboard2Broken;
