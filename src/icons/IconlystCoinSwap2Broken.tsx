import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinSwap2Broken = ({
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
      d="M5.84 7.34 4.425 8.755 3.009 7.34"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.425 8.674V6.538A3.54 3.54 0 0 1 7.963 3M16.689 3a3.959 3.959 0 1 0 3.153 1.565M7.312 21a3.959 3.959 0 1 0-2.608-.981M18.16 16.66l1.415-1.416 1.416 1.415"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.575 15.326v2.136A3.54 3.54 0 0 1 16.037 21"
    />
  </Svg>
);
export default IconlystCoinSwap2Broken;
