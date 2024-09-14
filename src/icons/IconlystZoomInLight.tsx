import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZoomInLight = ({
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
      d="M19.767 9.221V7.543c0-2.607-1.624-4.45-4.234-4.45H8.067c-2.601 0-4.233 1.843-4.233 4.45v7.035c0 2.607 1.624 4.449 4.233 4.449h1.969"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.632 12.617H15.75c-1.354 0-2.201.958-2.201 2.314v3.658c0 1.356.843 2.313 2.2 2.313h3.883c1.357 0 2.201-.957 2.201-2.313v-3.658c0-1.355-.844-2.314-2.201-2.314"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.701 11.047 7.925 7.27m3.776 3.776-.007-3.397m.007 3.397-3.396-.007"
    />
  </Svg>
);
export default IconlystZoomInLight;
