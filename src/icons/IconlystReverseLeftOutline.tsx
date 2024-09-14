import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReverseLeftOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.584 4.802a.75.75 0 0 1 0 1.06l-1.149 1.15-1.374 1.374.995.995.001.001 1.527 1.527a.75.75 0 0 1-1.061 1.06l-1.526-1.525v-.002L3.47 8.917a.75.75 0 0 1 0-1.061L5.374 5.95 6.523 4.8a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.25 8.387a.75.75 0 0 1 .75-.75h10.857a5.893 5.893 0 0 1 0 11.786H6.42a.75.75 0 0 1 0-1.5h8.437a4.394 4.394 0 0 0 0-8.786H4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReverseLeftOutline;
