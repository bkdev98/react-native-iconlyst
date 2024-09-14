import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraphChartTwoTone = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.5 20.12h-14a2 2 0 0 1-2-2v-14"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.687 13.082a1.443 1.443 0 1 1-2.886 0 1.443 1.443 0 0 1 2.886 0M16.628 12.919a1.443 1.443 0 1 1 0 .012zM15.135 7.968a1.443 1.443 0 1 1-2.887 0 1.443 1.443 0 0 1 2.887 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.22 12.028 2.496-3.002M17.09 11.868l-2.417-2.846"
    />
  </Svg>
);
export default IconlystGraphChartTwoTone;
