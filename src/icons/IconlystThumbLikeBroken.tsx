import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLikeBroken = ({
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
      d="M3 15.875v2.371c0 .571 0 .856.066 1.09a1.75 1.75 0 0 0 1.21 1.21c.233.065.518.065 1.089.065.57 0 .855 0 1.088-.066a1.75 1.75 0 0 0 1.21-1.21c.066-.233.066-.518.066-1.089v-7.225c0-.57 0-.856-.066-1.089a1.75 1.75 0 0 0-1.21-1.21c-.233-.066-.518-.066-1.088-.066s-.856 0-1.089.066a1.75 1.75 0 0 0-1.21 1.21C3 10.165 3 10.45 3 11.022v1.216"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.027 20.579a59 59 0 0 1-2.226-.085c-1.544-.086-2.982-.773-4.072-1.869M7.73 9.738c1.444-1.87 2.878-3.748 4.336-5.608.462-.59 1.27-.886 1.996-.675 1.62.47 1.207 3.342.784 4.864-.315 1.13.066 1.52.986 1.52 2.01 0 2.965 0 3.65.413a2.88 2.88 0 0 1 1.285 1.678c.419 1.464.274 4.253-.44 6.197-.485 1.314-1.848 2.217-3.028 2.348"
    />
  </Svg>
);
export default IconlystThumbLikeBroken;
