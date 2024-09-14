import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodCase2TwoTone = ({
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
      d="M20.103 16.682V7.317A4.317 4.317 0 0 0 15.786 3H8.817A4.317 4.317 0 0 0 4.5 7.317v9.365A4.32 4.32 0 0 0 8.817 21h6.969a4.32 4.32 0 0 0 4.317-4.318"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.863 8.69c0 .77.625 1.394 1.395 1.394h6.086a1.395 1.395 0 1 0 0-2.79H9.258c-.77 0-1.395.624-1.395 1.395m0 0h-3.36m15.6 0h-3.36"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAirpodCase2TwoTone;
