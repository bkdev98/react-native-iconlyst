import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneTakeOffBroken = ({
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
      d="M4.1 14.976c1.264-.524 3.757-1.595 5.041-2.129L6.786 7.143c.638-.228 1.221-.492 1.833-.639.714-.17 1.329.154 1.855.614a192 192 0 0 1 3.587 3.2c.298.275.533.3.89.145 1.024-.452 2.052-.903 3.104-1.282 1.217-.44 2.95-.486 3.38 1.05.34 1.21-.703 2.242-1.73 2.675q-2.302.971-4.609 1.931"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 13.537c.091.219.447 1.083.54 1.3 1.036 2.432 2.97 3.288 5.414 2.308q1.123-.45 2.243-.907"
    />
  </Svg>
);
export default IconlystPlaneTakeOffBroken;
