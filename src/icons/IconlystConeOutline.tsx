import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConeOutline = ({
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
      d="M10.464 3.373c.773-1.497 2.8-1.497 3.573 0l6.384 12.376a.75.75 0 1 1-1.333.687L12.704 4.061c-.12-.232-.302-.311-.454-.311-.151 0-.333.079-.453.31L5.413 16.437a.75.75 0 0 1-1.333-.687z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.998 15.33c-1.364.643-1.879 1.384-1.879 1.95s.515 1.309 1.879 1.952c1.305.616 3.161 1.018 5.252 1.018s3.946-.402 5.251-1.018c1.364-.643 1.878-1.384 1.878-1.951s-.514-1.308-1.878-1.952c-1.305-.616-3.16-1.018-5.251-1.018-2.09 0-3.947.402-5.252 1.018m-.64-1.357c1.546-.73 3.63-1.162 5.892-1.162 2.261 0 4.345.432 5.892 1.162 1.488.702 2.737 1.82 2.737 3.308s-1.249 2.605-2.737 3.308c-1.547.73-3.63 1.16-5.892 1.16s-4.346-.43-5.893-1.16C4.87 19.886 3.62 18.768 3.62 17.28s1.25-2.606 2.738-3.308"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystConeOutline;
