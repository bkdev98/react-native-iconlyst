import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp1Light = ({
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
      d="M11.174 11.94h1.652M3.88 20.437l9.118-16.93M9.875 20.364v-5.217a.81.81 0 0 1 .797-.823h2.656a.81.81 0 0 1 .797.823v5.216M20.117 20.437 11 3.507M3 20.493h18"
    />
  </Svg>
);
export default IconlystCamp1Light;
