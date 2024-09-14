import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrezorTwoTone = ({
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
      d="m9.799 9.748-2.152.539a1.515 1.515 0 0 0-1.147 1.47v5.455c0 .574.324 1.098.837 1.355l4.545 2.272c.427.214.929.214 1.355 0l4.545-2.272c.513-.257.837-.781.837-1.355v-5.456c0-.695-.473-1.3-1.147-1.47l-2.152-.538a11.45 11.45 0 0 0-5.521 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.016 10.196V7.545a4.545 4.545 0 0 1 9.089 0v2.65"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTrezorTwoTone;
