import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchScan2Broken = ({
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
      d="M3 8.47V6.891A3.89 3.89 0 0 1 6.893 3h1.29M3 15.53v1.578A3.89 3.89 0 0 0 6.893 21H8.15M21 15.53v1.578A3.89 3.89 0 0 1 17.108 21h-1.29M21 8.47V6.891A3.89 3.89 0 0 0 17.107 3H15.85M11.68 8.117a3.475 3.475 0 1 1-2.52 1.082M14.045 14.138l1.75 1.745"
    />
  </Svg>
);
export default IconlystSearchScan2Broken;
