import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRack4Outline = ({
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
      d="M2.527 16.522a3.66 3.66 0 0 1 3.66-3.66h12.126a3.66 3.66 0 0 1 3.66 3.66v1.568a3.66 3.66 0 0 1-3.66 3.66H6.187a3.66 3.66 0 0 1-3.66-3.66zm3.66-2.16a2.16 2.16 0 0 0-2.16 2.16v1.568a2.16 2.16 0 0 0 2.16 2.16h12.126a2.16 2.16 0 0 0 2.16-2.16v-1.568a2.16 2.16 0 0 0-2.16-2.16z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.89 17.306a.75.75 0 0 1 .75-.75h.523a.75.75 0 0 1 0 1.5h-.522a.75.75 0 0 1-.75-.75m5.713 0a.75.75 0 0 1 .75-.75h3.56a.75.75 0 0 1 0 1.5h-3.56a.75.75 0 0 1-.75-.75M2.527 5.91a3.66 3.66 0 0 1 3.66-3.66h12.126a3.66 3.66 0 0 1 3.66 3.66v1.567a3.66 3.66 0 0 1-3.66 3.66H6.187a3.66 3.66 0 0 1-3.66-3.66zm3.66-2.16a2.16 2.16 0 0 0-2.16 2.16v1.567a2.16 2.16 0 0 0 2.16 2.16h12.126a2.16 2.16 0 0 0 2.16-2.16V5.91a2.16 2.16 0 0 0-2.16-2.16z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.89 6.693a.75.75 0 0 1 .75-.75h.523a.75.75 0 1 1 0 1.5h-.522a.75.75 0 0 1-.75-.75m5.713 0a.75.75 0 0 1 .75-.75h3.56a.75.75 0 0 1 0 1.5h-3.56a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerRack4Outline;
