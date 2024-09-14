import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapLightcurved = ({
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
      d="M6.979 4.601V17.22M2.9 8.7s2.169-4.1 4.078-4.1c1.908 0 4.078 4.1 4.078 4.1M16.906 19.427V6.81M20.985 15.328s-2.17 4.1-4.078 4.1-4.078-4.1-4.078-4.1"
    />
  </Svg>
);
export default IconlystSwapLightcurved;
