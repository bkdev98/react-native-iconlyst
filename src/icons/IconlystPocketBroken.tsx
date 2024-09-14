import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPocketBroken = ({
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
      d="m3 9.877 1.192-4.29a.844.844 0 0 1 .813-.618h3.498M21 9.877l-1.192-4.29a.844.844 0 0 0-.813-.618H12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.885 4.977 3.033 4.578c.24.367.656.589 1.1.589h5.96c.444 0 .86-.222 1.102-.589l3.033-4.578"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.875 4.977 6.623 17.88c.05.328.214.618.445.82.232.204.541.33.869.33h7.93c.338 0 .648-.126.889-.338.222-.204.377-.474.425-.792l.485-3.231m1.456-9.693-.97 6.462M10.346 15.063l-3.278 3.64M16.756 18.693l-6.53-8.548"
    />
  </Svg>
);
export default IconlystPocketBroken;
