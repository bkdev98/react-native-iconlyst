import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoveMessageLikeTwoTone = ({
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
      d="M21.477 15.094c0 2.766-1.845 5.013-4.582 5.006H8.058c-2.737.007-4.581-2.24-4.581-5.006v-6.18C3.477 6.15 5.32 3.9 8.058 3.9h8.837c2.737 0 4.582 2.25 4.582 5.013z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.902 15.153 4.15 17.728M20.807 17.727l-3.752-2.575M7.155 8.34 4.148 6.28M20.81 6.28l-2.997 2.06"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.375 11.482c.199-1.117-.366-2.287-1.538-2.498a1.93 1.93 0 0 0-1.695.526 1.95 1.95 0 0 0-1.77-.06c-1.076.512-1.315 1.79-.829 2.814.762 1.625 3.32 2.612 3.32 2.612s2.19-1.605 2.512-3.394"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoveMessageLikeTwoTone;
