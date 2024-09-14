import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchScan1TwoTone = ({
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
      d="M3.5 15.53v1.578A3.89 3.89 0 0 0 7.393 21H8.65M3.5 8.47V6.891A3.89 3.89 0 0 1 7.393 3h1.29M21.5 8.47V6.891A3.89 3.89 0 0 0 17.607 3H16.35"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.454 15.103a4.125 4.125 0 1 0-8.25 0 4.125 4.125 0 0 0 8.25 0M18.137 18.124l2.222 2.218"
    />
  </Svg>
);
export default IconlystSearchScan1TwoTone;
