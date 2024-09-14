import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunTemperatureTwoTone = ({
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
      d="M5.079 6v6.022c-1.208.913-2 2.347-2 3.978a5 5 0 0 0 10 0c0-1.63-.793-3.065-2-3.978V6a3 3 0 0 0-6 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.55 16a1.473 1.473 0 1 1-2.946 0 1.473 1.473 0 0 1 2.947 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.078 8v6.527"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.475 6.68a1 1 0 1 1 0 1.999 1 1 0 0 1 0-2"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.58 6.65a3.36 3.36 0 0 0-.043-2.594 3.373 3.373 0 0 0 4.63-.772 3.373 3.373 0 0 0 2.982 3.623 3.374 3.374 0 0 0-1.646 4.395 3.373 3.373 0 0 0-4.629.772 3.36 3.36 0 0 0-.708-2.352"
    />
  </Svg>
);
export default IconlystSunTemperatureTwoTone;
