import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLawnMowerLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.536 18.314a2.906 2.906 0 1 0-5.813 0 2.907 2.907 0 0 0 5.813 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.25 3.916h1.862l2.865 11.567"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.035 7.64 4.028 8.708c-.53.281-.752.922-.512 1.471l2.714 6.198"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.25 19.237a1.984 1.984 0 1 0-3.968 0 1.984 1.984 0 0 0 3.968 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.674 15.666h1.274M11.535 18.85h5.746M6.79 10.69l12.297 2.768c.86.195 1.442.997 1.36 1.875l-.202 2.185M11.06 8.446l6.697 1.52"
    />
  </Svg>
);
export default IconlystLawnMowerLight;
