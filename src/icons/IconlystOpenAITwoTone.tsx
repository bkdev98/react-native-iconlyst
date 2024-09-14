import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOpenAITwoTone = ({
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
      d="m12.485 14.875-5.348-3.111V6.95c.003-1.293.677-2.467 1.503-3.202 1.717-1.527 4.853-1.325 6.185.765"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.175 19.487c1.332 2.09 4.468 2.291 6.185.764.826-.735 1.5-1.909 1.502-3.202v-4.813l-5.347-3.111-2.469 1.401"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.15 10.283c1.148-2.197-.241-5.016-2.42-5.743-1.05-.35-2.404-.349-3.526.294l-4.172 2.4L10 13.42l2.476 1.454"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.999 10.58-.031 6.187-4.172 2.4c-1.123.641-2.476.643-3.525.293-2.18-.727-3.569-3.546-2.42-5.743"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.03 10.528 15.427 7.5l4.147 2.444c1.112.658 1.782 1.835 1.995 2.92.444 2.254-1.321 4.853-3.798 4.94"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.23 6.195c-2.477.087-4.243 2.687-3.799 4.94.214 1.085.884 2.262 1.996 2.92L9.574 16.5l5.395-3.027.031-2.906"
    />
  </Svg>
);
export default IconlystOpenAITwoTone;
