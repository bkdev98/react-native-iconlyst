import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize2Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.7 5.29H6.56a1.5 1.5 0 0 0-1.5 1.5v2.139M15.357 19.249h2.14a1.5 1.5 0 0 0 1.5-1.5v-2.14M15.856 5.29h-.853M18.997 8.877V5.769a.2.2 0 0 0-.34-.142L15.002 9.25M8.201 19.25h.854M5.06 15.66v3.108a.2.2 0 0 0 .341.142l3.654-3.623"
    />
  </Svg>
);
export default IconlystResize2Broken;
