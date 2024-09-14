import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandleChartLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.5 20.12h-14a2 2 0 0 1-2-2v-14M10.709 16.475v-2.402"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.234 14.073h-1.05a1.017 1.017 0 0 1-1.02-1.016V9.91c0-.56.457-1.014 1.02-1.014h1.05c.563 0 1.02.454 1.02 1.014v3.148c0 .561-.457 1.016-1.02 1.016"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.709 8.895V6.492M17.23 15.102V12.7"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.755 12.7h-1.05a1.017 1.017 0 0 1-1.02-1.016V7.536c0-.56.457-1.014 1.02-1.014h1.05c.563 0 1.02.453 1.02 1.014v4.148c0 .561-.457 1.016-1.02 1.016"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.23 6.521V4.12"
    />
  </Svg>
);
export default IconlystCandleChartLight;
