import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMistOutline = ({
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
      d="M10.94 19.527c0 .414.335.75.75.75h9.924a.75.75 0 0 0 0-1.5H11.69a.75.75 0 0 0-.75.75M14.29 4.473a.75.75 0 0 1-.75.75H3.613a.75.75 0 1 1 0-1.5h9.925a.75.75 0 0 1 .75.75M4.714 19.527c0 .414.336.75.75.75h2.762a.75.75 0 0 0 0-1.5H5.464a.75.75 0 0 0-.75.75M20.516 4.473a.75.75 0 0 1-.75.75h-2.762a.75.75 0 0 1 0-1.5h2.762a.75.75 0 0 1 .75.75M22.364 9.475a.75.75 0 0 0-.75-.75h-3.23a.75.75 0 0 0 0 1.5h3.23a.75.75 0 0 0 .75-.75M3.146 14.477a.75.75 0 0 1 .75-.75h3.23a.75.75 0 1 1 0 1.5h-3.23a.75.75 0 0 1-.75-.75M10.755 9.475a.75.75 0 0 0-.75-.75h-4.26a.75.75 0 1 0 0 1.5h4.26a.75.75 0 0 0 .75-.75M14.756 14.477a.75.75 0 0 1 .75-.75h4.26a.75.75 0 1 1 0 1.5h-4.26a.75.75 0 0 1-.75-.75M15.73 9.475a.75.75 0 0 0-.75-.75h-1.572a.75.75 0 0 0 0 1.5h1.572a.75.75 0 0 0 .75-.75M9.78 14.477a.75.75 0 0 1 .75-.75H12.1a.75.75 0 1 1 0 1.5H10.53a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMistOutline;
