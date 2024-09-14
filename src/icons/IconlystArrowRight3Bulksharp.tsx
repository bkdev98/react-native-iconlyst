import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRight3Bulksharp = ({
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
      d="M21.25 11h-18v2h18z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.25 13c-3.67 0-6.66-3.22-6.66-6.66v-1h2v1c0 2.379 2.136 4.66 4.66 4.66h1v2z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.25 11c-3.67 0-6.66 3.22-6.66 6.66v1h2v-1c0-2.379 2.136-4.66 4.66-4.66h1v-2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowRight3Bulksharp;
