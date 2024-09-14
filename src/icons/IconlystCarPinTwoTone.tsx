import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarPinTwoTone = ({
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
      d="M6.78 8.762a7.346 7.346 0 0 1 14.47 1.8c0 2.526-1.441 4.998-3.063 6.879a17.5 17.5 0 0 1-2.134 2.088"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.147 12.234a2.448 2.448 0 1 0-3.463-3.464"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.811 17.304h.578M5.623 17.304H6.2M3.25 14.858c3.482.494 7.017.494 10.5 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.252 20.198a.584.584 0 0 0 .584.586h1.408a.584.584 0 0 0 .584-.584v-.24c0-.323.261-.584.584-.584h4.184c.322 0 .584.261.584.584v.24c0 .322.261.584.584.584h1.413a.584.584 0 0 0 .584-.584v-3.054a2.23 2.23 0 0 0-.431-1.317l-.681-.914a1 1 0 0 1-.13-.25l-.614-1.702a1.31 1.31 0 0 0-1.01-.846 15.3 15.3 0 0 0-4.773 0 1.31 1.31 0 0 0-1.005.846l-.613 1.702a1 1 0 0 1-.13.239l-.693.953c-.273.378-.42.833-.42 1.3z"
    />
  </Svg>
);
export default IconlystCarPinTwoTone;
