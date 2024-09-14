import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunglassesTwoTone = ({
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
      d="M8.364 3.23h8.218c2.872 0 4.66 2.028 4.66 4.898v7.742c0 2.87-1.788 4.897-4.661 4.897H8.364c-2.872 0-4.659-2.027-4.659-4.897V8.128c0-2.87 1.795-4.898 4.66-4.898"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.553 16.056c.67-.708 1.59-1.098 2.555-.997"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.378 9.963a2.096 2.096 0 1 0-4.192 0 2.096 2.096 0 0 0 4.192 0M17.864 9.963a2.096 2.096 0 1 0-4.192 0 2.096 2.096 0 0 0 4.192 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 9.96h-3.64m-14.36 0h3.688M13.67 9.96h-2.294"
    />
  </Svg>
);
export default IconlystSunglassesTwoTone;
