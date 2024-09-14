import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodCase2Light = ({
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
      d="M19.603 16.682V7.317A4.317 4.317 0 0 0 15.286 3H8.317A4.317 4.317 0 0 0 4 7.317v9.365A4.32 4.32 0 0 0 8.317 21h6.969a4.32 4.32 0 0 0 4.317-4.318"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.758 10.084h6.086a1.395 1.395 0 1 0 0-2.79H8.758a1.395 1.395 0 1 0 0 2.79M19.604 8.69h-3.36m-8.88 0h-3.36"
    />
  </Svg>
);
export default IconlystAirpodCase2Light;
