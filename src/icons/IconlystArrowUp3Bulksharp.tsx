import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUp3Bulksharp = ({
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
      d="M11.25 3v18h2V3z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.25 4c0 3.67-3.22 6.66-6.66 6.66h-1v-2h1c2.379 0 4.66-2.136 4.66-4.66V3h2z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.25 4c0 3.67 3.22 6.66 6.66 6.66h1v-2h-1c-2.379 0-4.66-2.136-4.66-4.66V3h-2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUp3Bulksharp;
