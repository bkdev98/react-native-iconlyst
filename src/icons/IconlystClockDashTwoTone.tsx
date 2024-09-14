import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClockDashTwoTone = ({
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
      d="m9.955 13.8 2.68-1.348V8.44"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.274 5.928a9 9 0 0 0-.975 1.32M5.205 16.219a8.5 8.5 0 0 1-.743-1.668M10.855 20.41l.01-.001a8.3 8.3 0 0 0 1.96.224M10.106 3.435a8.3 8.3 0 0 0-1.668.743"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.856 3a8.3 8.3 0 0 1 1.962.225c.916.203 1.79.562 2.581 1.048.476.282.922.606 1.328.974a8.6 8.6 0 0 1 1.751 2.156q.462.79.745 1.676a8.7 8.7 0 0 1 .435 2.751 8 8 0 0 1-.227 1.952l.001.01a8.4 8.4 0 0 1-1.049 2.571 7.7 7.7 0 0 1-.973 1.329 8.7 8.7 0 0 1-2.164 1.76c-.526.3-1.087.558-1.668.744"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.283 19.348a8 8 0 0 1-1.318-.965M4.25 9.832a8.2 8.2 0 0 0-.224 1.971"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.692 20.754-2.096-.578.59-2.082"
    />
  </Svg>
);
export default IconlystClockDashTwoTone;