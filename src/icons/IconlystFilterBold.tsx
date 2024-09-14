import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterBold = ({
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
      d="M9.996 8.553h5.97c.311 0 .564.253.564.564v.668c0 .31-.132.607-.387.84l-2.386 2.36a1.5 1.5 0 0 0-.497 1.116l-.002.977-.927.364v-1.579c0-.394-.16-.78-.472-1.094l-2.106-1.873a1.1 1.1 0 0 1-.32-.775V9.117c0-.31.252-.564.563-.564"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.007 2.5h7.948c3.305 0 5.526 2.123 5.526 5.283v8.434c0 3.16-2.222 5.283-5.527 5.283H9.008c-3.306 0-5.527-2.123-5.527-5.284V7.783c0-3.16 2.221-5.283 5.527-5.283m8.167 9.214a2.6 2.6 0 0 0 .857-1.929v-.667a2.067 2.067 0 0 0-2.065-2.065h-5.97a2.067 2.067 0 0 0-2.064 2.065v1.003c0 .694.271 1.346.792 1.866l2.108 1.876v1.579a1.502 1.502 0 0 0 2.058 1.396l.923-.366c.575-.229.947-.778.947-1.397l.027-1.001z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilterBold;
