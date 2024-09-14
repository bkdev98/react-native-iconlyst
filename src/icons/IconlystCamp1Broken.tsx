import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp1Broken = ({
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
      d="M11.674 11.94h1.652M8.076 13.574l5.421-10.066M4.38 20.436l2.28-4.232M10.375 20.364v-5.217a.81.81 0 0 1 .797-.823h2.656a.81.81 0 0 1 .797.823v2.924M20.617 20.437 11.5 3.507M3.5 20.493h18"
    />
  </Svg>
);
export default IconlystCamp1Broken;
