import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRvTrailerLight = ({
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
      d="M15.846 18.142H9.13"
    />
    <Circle
      cx={7.18}
      cy={18.317}
      r={1.955}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={17.808}
      cy={18.317}
      r={1.955}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.17 18.456h-.757a2.185 2.185 0 0 1-2.163-2.164V7.661a2.163 2.163 0 0 1 2.163-2.163h13.562c1.327 0 2.427 1.065 2.427 2.392v0c0 .21-.17.38-.38.38H18.95a.396.396 0 0 0-.396.396c0 2.593.842 3.58 2.601 4.574.66.373 1.095.843 1.095 1.6v1.813c0 1.105-.896 1.782-2 1.782h-.31"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.118 11.703a.5.5 0 0 0 .5-.5V8.77a.5.5 0 0 0-.5-.5H5.25a.5.5 0 0 0-.5.5v2.433a.5.5 0 0 0 .5.5zM18.887 8.27h-4.194a.5.5 0 0 0-.5.5v2.433a.5.5 0 0 0 .5.5h4.59"
    />
  </Svg>
);
export default IconlystRvTrailerLight;
