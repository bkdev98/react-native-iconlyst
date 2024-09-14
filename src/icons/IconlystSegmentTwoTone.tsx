import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSegmentTwoTone = ({
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
      d="M9.746 9.152h11.255M2.999 14.18h11.106"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.886 12.805a8.984 8.984 0 0 1-12.648 7.4M3.114 10.16A8.982 8.982 0 0 1 15.14 3.6"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.016 4.98v.028m.117-.023a.118.118 0 1 1-.237 0 .118.118 0 0 1 .237 0M5.393 18.706v.029m.118-.023a.118.118 0 1 1-.237 0 .118.118 0 0 1 .237 0"
    />
  </Svg>
);
export default IconlystSegmentTwoTone;
