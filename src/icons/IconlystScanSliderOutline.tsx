import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanSliderOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.117 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M13.76 4.086a.75.75 0 0 1 .75-.75h1.445c1.48 0 2.74.528 3.624 1.478.88.944 1.334 2.243 1.334 3.694v6.988c0 1.447-.455 2.745-1.334 3.687-.885.948-2.143 1.476-3.624 1.476H14.51a.75.75 0 0 1 0-1.5h1.445c1.11 0 1.955-.387 2.527-1 .577-.618.93-1.527.93-2.663V8.508c0-1.14-.353-2.052-.93-2.672-.572-.613-1.417-1-2.527-1H14.51a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.018 5.836c-.576.62-.93 1.531-.93 2.672v6.988c0 1.137.352 2.047.927 2.665.57.611 1.413.998 2.523.998h2.582a.75.75 0 0 1 0 1.5H8.538c-1.481 0-2.738-.528-3.621-1.477-.877-.942-1.33-2.24-1.33-3.686V8.508c0-1.451.455-2.75 1.333-3.694.884-.95 2.14-1.478 3.618-1.478h2.582a.75.75 0 0 1 0 1.5H8.538c-1.105 0-1.949.386-2.52 1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanSliderOutline;
