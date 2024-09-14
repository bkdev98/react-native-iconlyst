import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWheelKeyLight = ({
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
      d="M3.769 10.246H8.29l.905-1.008a2 2 0 0 1 1.49-.665h3.13a2 2 0 0 1 1.49.665l.904 1.008h4.523"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.174 11.707A9.002 9.002 0 0 0 3.25 12.885a9 9 0 0 0 8.233 8.968"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.473 14.478c4.782 0 6.77 2.516 6.77 7.165"
    />
    <Circle
      cx={12.25}
      cy={13.969}
      r={1.5}
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
      d="m19.72 17.041-.01.01M14.668 20.116l2.163-2.162a2.6 2.6 0 0 1-.067-.558 2.618 2.618 0 1 1 1.813 2.492l-.54.538-1.38 1.359c-.125.124-.265.318-.44.318h-1.324a.32.32 0 0 1-.318-.319v-1.443c0-.085.034-.166.093-.225"
    />
  </Svg>
);
export default IconlystWheelKeyLight;
