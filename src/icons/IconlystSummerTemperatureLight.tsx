import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSummerTemperatureLight = ({
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
      d="M5.97 6v6.022C4.761 12.935 3.968 14.37 3.968 16a5 5 0 0 0 10 0c0-1.63-.792-3.065-2-3.978V6a3 3 0 0 0-6 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.44 16a1.473 1.473 0 1 1-2.947 0 1.473 1.473 0 0 1 2.946 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.967 10.481v4.046M14.709 3.2v.846m5.551 4.706h-.846m-.78-3.926-.598.598m.598 7.253-.598-.599M14.895 6.528a2.215 2.215 0 0 1 .624 4.343"
    />
  </Svg>
);
export default IconlystSummerTemperatureLight;
