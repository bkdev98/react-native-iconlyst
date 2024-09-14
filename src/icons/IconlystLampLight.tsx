import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLampLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.188 9.944a6.77 6.77 0 0 0 4.137 6.247v2.265a2.69 2.69 0 0 0 2.68 2.68 2.69 2.69 0 0 0 2.68-2.68v-2.253c2.836-1.199 4.68-4.323 3.977-7.712-.542-2.594-2.64-4.68-5.233-5.21-4.38-.887-8.241 2.433-8.241 6.663M9.326 16.207h5.366"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.072 16.06 1.145-7.142h-4.48l1.145 7.142"
    />
  </Svg>
);
export default IconlystLampLight;