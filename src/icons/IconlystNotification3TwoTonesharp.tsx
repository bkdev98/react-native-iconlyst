import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotification3TwoTonesharp = ({
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
      strokeWidth={1.5}
      d="M12.25 2.889a6.19 6.19 0 0 0-6.188 6.187v4.581l-1.613 1.635v2.704H20.05v-2.704l-1.613-1.635v-4.58"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M15.417 17.996v.226a3.167 3.167 0 1 1-6.333 0v-.226"
      opacity={0.4}
    />
    <Circle
      cx={16.588}
      cy={4.963}
      r={2.345}
      stroke={props.color}
      strokeWidth={1.5}
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNotification3TwoTonesharp;
