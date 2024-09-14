import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandleChart2LineLight = ({
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
      d="M7.75 21.119v-3.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.515 17.619H6.984c-.82 0-1.484-.662-1.484-1.48v-6.042a1.48 1.48 0 0 1 1.484-1.478h1.531c.82 0 1.485.66 1.485 1.478v6.043c0 .817-.665 1.479-1.485 1.479"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.75 8.619v-3.5M17.25 19.119v-3.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.015 15.619h-1.531c-.82 0-1.484-.662-1.484-1.48V8.098a1.48 1.48 0 0 1 1.484-1.478h1.531c.82 0 1.485.66 1.485 1.478v6.043c0 .817-.665 1.479-1.485 1.479"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.25 6.619v-3.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21.5 12.119h-18"
    />
  </Svg>
);
export default IconlystCandleChart2LineLight;
