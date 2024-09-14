import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchScan1Light = ({
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
      d="M3 15.53v1.578A3.89 3.89 0 0 0 6.893 21H8.15M3 8.47V6.891A3.89 3.89 0 0 1 6.893 3h1.29M21 8.47V6.891A3.89 3.89 0 0 0 17.107 3H15.85M18.954 15.103a4.125 4.125 0 1 0-8.25 0 4.125 4.125 0 0 0 8.25 0M17.637 18.124l2.222 2.218"
    />
  </Svg>
);
export default IconlystSearchScan1Light;
