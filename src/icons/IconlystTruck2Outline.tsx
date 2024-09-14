import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruck2Outline = ({
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
      d="M2.5 4.9a.75.75 0 0 1 .75-.75h11.118a2.83 2.83 0 0 1 2.83 2.83v.533l2.946 1.3A3.11 3.11 0 0 1 22 11.66v3.443a2.83 2.83 0 0 1-2.83 2.83h-.163a2.668 2.668 0 0 1-5.12 0H9.862a2.668 2.668 0 0 1-5.137-.066A2.83 2.83 0 0 1 2.5 15.104v-2.512a.75.75 0 0 1 1.5 0v2.512c0 .538.32 1.002.78 1.21a2.668 2.668 0 0 1 5.082.12h4.025c.255-.87.94-1.556 1.81-1.81V6.98a1.33 1.33 0 0 0-1.33-1.33H3.25a.75.75 0 0 1-.75-.75m14.697 9.723c.87.255 1.555.94 1.81 1.81h.164a1.33 1.33 0 0 0 1.329-1.329v-1.943h-1.651a.75.75 0 0 1 0-1.5H20.5c0-.639-.378-1.218-.961-1.476l-2.342-1.033zM4.387 7.31a.75.75 0 0 1 .75-.75h2.565a.75.75 0 0 1 0 1.5H5.138a.75.75 0 0 1-.75-.75M2.5 9.72a.75.75 0 0 1 .75-.75h4.451a.75.75 0 1 1 0 1.5H3.25a.75.75 0 0 1-.75-.75m4.803 6.297a1.167 1.167 0 1 0 0 2.333 1.167 1.167 0 0 0 0-2.334m9.144 0a1.167 1.167 0 1 0 0 2.333 1.167 1.167 0 0 0 0-2.334"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTruck2Outline;
