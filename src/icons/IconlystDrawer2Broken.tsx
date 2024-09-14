import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDrawer2Broken = ({
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
      d="M8.133 3C5.193 3 3.35 5.081 3.35 8.026v7.948C3.35 18.919 5.185 21 8.133 21h7.732c2.949 0 4.784-2.081 4.784-5.026V8.026C20.65 5.081 18.814 3 15.866 3h-4.36M10.045 7.777h3.913m-3.913 8.445h3.913M3.465 12H17.81"
    />
  </Svg>
);
export default IconlystDrawer2Broken;
