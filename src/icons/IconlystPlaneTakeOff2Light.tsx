import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneTakeOff2Light = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.6 12.507c1.263-.525 3.757-1.595 5.04-2.129-.785-1.903-1.553-3.766-2.354-5.704.638-.227 1.221-.492 1.833-.639.714-.17 1.33.154 1.855.614a193 193 0 0 1 3.587 3.2c.298.276.533.301.89.144 1.024-.452 2.052-.902 3.104-1.282 1.217-.44 2.95-.485 3.38 1.05.34 1.21-.703 2.242-1.73 2.676a644 644 0 0 1-10.251 4.24c-2.444.979-4.378.123-5.415-2.309-.093-.218-.449-1.08-.539-1.3M4.955 20.01h14.09"
    />
  </Svg>
);
export default IconlystPlaneTakeOff2Light;
