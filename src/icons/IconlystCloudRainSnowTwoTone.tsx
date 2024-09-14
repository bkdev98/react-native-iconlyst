import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudRainSnowTwoTone = ({
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
      d="M18.618 16.59a4.14 4.14 0 0 0 2.437-3.774c0-2.596-1.83-4.139-4.103-4.14 0-1.633-1.28-4.899-4.897-4.899S7.158 7.043 7.158 8.675c-2.27.02-4.103 1.545-4.103 4.141 0 1.68.999 3.125 2.436 3.774"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.955 20.057.497-1.094M14.915 16.775l.497-1.094M17.906 20.063q.005 0 .005-.006 0-.005-.005-.005t-.005.005.005.006M11.933 20.063q.005 0 .005-.006 0-.005-.005-.005t-.005.005.005.006M9.937 16.786q.005 0 .005-.005 0-.006-.005-.006t-.005.006.005.005"
    />
  </Svg>
);
export default IconlystCloudRainSnowTwoTone;
