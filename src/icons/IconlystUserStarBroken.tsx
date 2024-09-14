import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserStarBroken = ({
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
      d="m16.67 14.783.689 1.384c.034.07.1.119.178.13l1.54.223a.24.24 0 0 1 .157.09.23.23 0 0 1-.026.306l-1.116 1.08a.23.23 0 0 0-.067.207l.268 1.524a.235.235 0 0 1-.194.265.26.26 0 0 1-.153-.024l-1.372-.718a.23.23 0 0 0-.22 0l-1.382.722a.24.24 0 0 1-.32-.098.24.24 0 0 1-.024-.149l.267-1.522a.24.24 0 0 0-.067-.208l-1.122-1.08a.234.234 0 0 1 0-.33.27.27 0 0 1 .134-.065l1.54-.224a.24.24 0 0 0 .179-.13l.687-1.383a.238.238 0 0 1 .425 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.52 19.489c0-2.042 1.611-4.583 6.253-4.583M7.798 8.016a4.015 4.015 0 1 0 .98-2.63"
    />
  </Svg>
);
export default IconlystUserStarBroken;
