import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandleChart3LineTwoTone = ({
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
      d="M6.515 16.619H4.984c-.82 0-1.484-.662-1.484-1.48v-1.042a1.48 1.48 0 0 1 1.484-1.478h1.531c.82 0 1.485.66 1.485 1.478v1.043c0 .817-.665 1.479-1.485 1.479"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.75 20.118v-3.5m0-4v-3.5"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.265 11.619h-1.531c-.82 0-1.484-.662-1.484-1.48V7.098a1.48 1.48 0 0 1 1.484-1.478h1.531c.82 0 1.485.66 1.485 1.478v3.043c0 .817-.665 1.479-1.485 1.479"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 14.118v-2.5m0-6v-2.5"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.015 18.619h-1.531c-.82 0-1.484-.662-1.484-1.48v-5.042a1.48 1.48 0 0 1 1.484-1.478h1.531c.82 0 1.485.66 1.485 1.478v5.043c0 .817-.665 1.479-1.485 1.479"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.25 21.118v-2.5m0-8v-2.5"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCandleChart3LineTwoTone;
