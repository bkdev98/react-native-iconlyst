import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwap2Light = ({
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
      d="M11.999 6.81a6.05 6.05 0 0 0-6.005-.009A6.05 6.05 0 0 0 2.988 12a6.05 6.05 0 0 0 3.006 5.198 6.05 6.05 0 0 0 6.005-.009M13.498 15l3-3-3-3M5.998 12h10.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.998 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
    />
  </Svg>
);
export default IconlystSwap2Light;
