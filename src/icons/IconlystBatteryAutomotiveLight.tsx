import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBatteryAutomotiveLight = ({
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
      d="M5.75 6.808v-1.97a1.166 1.166 0 0 1 2.333 0v1.828M18.75 6.808v-1.97a1.166 1.166 0 1 0-2.332 0v1.828M6.75 13.671h3M14.75 13.671h3M16.25 12.171v3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.25 16.84v-6.68A3.49 3.49 0 0 1 6.738 6.67h11.024a3.49 3.49 0 0 1 3.488 3.488v6.682a3.49 3.49 0 0 1-3.488 3.488H6.738A3.49 3.49 0 0 1 3.25 16.84"
    />
  </Svg>
);
export default IconlystBatteryAutomotiveLight;
