import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorkBoldcurved = ({
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
      d="M9.74 4.863c0-.85.588-1.54 1.31-1.54h2.4c.722 0 1.31.69 1.31 1.54v.024q-1.147-.115-2.51-.115-1.364 0-2.51.115zM2.756 10.78c2.61 1.608 5.99 2.496 9.514 2.499 3.518-.003 6.89-.887 9.496-2.488-.528-3.263-2.193-5-5.506-5.674v-.255c0-1.676-1.26-3.04-2.81-3.04h-2.4c-1.549 0-2.81 1.364-2.81 3.04v.255c-3.308.674-4.972 2.405-5.504 5.656.007.004.014.004.02.008"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13 14.817v2.163a.75.75 0 0 1-1.5 0v-2.164c-3.261-.109-6.379-.923-8.936-2.332-.015.32-.024.647-.024.99 0 6.425 2.541 8.702 9.71 8.702s9.71-2.277 9.71-8.703q0-.5-.022-.966c-2.561 1.401-5.679 2.207-8.938 2.31"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWorkBoldcurved;
