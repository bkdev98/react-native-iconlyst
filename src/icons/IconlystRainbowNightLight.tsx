import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainbowNightLight = ({
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
      d="M16.087 21.003a3.973 3.973 0 1 0-7.946 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.575 21.004a6.46 6.46 0 0 0-12.92 0M3.114 21.004a9.004 9.004 0 0 1 6.7-8.704"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.637 8.825c.024-.013.052.009.044.035a4.75 4.75 0 0 1-4.56 3.44 4.744 4.744 0 0 1-1.307-9.303c.026-.007.048.021.035.045a4.285 4.285 0 0 0 .758 5.03 4.28 4.28 0 0 0 5.03.753"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.114 21.004a8.96 8.96 0 0 0-1.835-5.447M8.14 4.646v.008M4.614 6.707a2.25 2.25 0 0 1-1.5 1.5 2.25 2.25 0 0 1 1.5 1.5 2.25 2.25 0 0 1 1.5-1.5 2.25 2.25 0 0 1-1.5-1.5"
    />
  </Svg>
);
export default IconlystRainbowNightLight;
