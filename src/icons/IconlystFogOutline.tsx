import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFogOutline = ({
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
      d="M22.364 20a.75.75 0 0 1-.75.75h-18a.75.75 0 0 1 0-1.5h18a.75.75 0 0 1 .75.75M22.364 14.67a.75.75 0 0 1-.75.75h-3a.75.75 0 1 1 0-1.5h3a.75.75 0 0 1 .75.75M15.364 14.67a.75.75 0 0 1-.75.75h-11a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 .75.75M22.364 9.33a.75.75 0 0 1-.75.75h-10a.75.75 0 1 1 0-1.5h10a.75.75 0 0 1 .75.75M8.364 9.33a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75M22.364 4a.75.75 0 0 1-.75.75h-18a.75.75 0 1 1 0-1.5h18a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFogOutline;
