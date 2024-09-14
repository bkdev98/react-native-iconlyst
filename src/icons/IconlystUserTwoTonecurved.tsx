import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserTwoTonecurved = ({
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
      d="M9.559 21.456c-3.672 0-6.81-.555-6.81-2.779s3.118-4.228 6.81-4.228c3.672 0 6.807 1.985 6.807 4.208s-3.115 2.8-6.807 2.8"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.559 11.278a4.364 4.364 0 1 0-4.364-4.364 4.35 4.35 0 0 0 4.333 4.364z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.801 10.079a3.289 3.289 0 0 0-.187-6.397"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.46 13.654c1.989 0 3.687 1.348 3.687 2.55 0 .71-.585 1.438-1.475 1.647"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUserTwoTonecurved;
