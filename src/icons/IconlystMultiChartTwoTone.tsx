import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMultiChartTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6.237 5.958a1.557 1.557 0 1 1 3.115 0 1.557 1.557 0 0 1-3.115 0Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.005 16.704a4.016 4.016 0 1 0-8.032 0 4.016 4.016 0 0 0 8.032 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.85 12.69v3.705c0 .247.2.447.447.447h3.705"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.481 3.236v7.157c0 .476.386.861.862.861H21.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.72 8.02 2.028-2.506 1.535 1.896 2.05-2.478"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15.235 21.002v-1.92M18.367 21.002v-6.236M21.5 21.002v-3.667M3.5 7.703v.009M5.922 9.745v.01"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMultiChartTwoTone;
