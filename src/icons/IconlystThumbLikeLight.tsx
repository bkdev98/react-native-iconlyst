import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLikeLight = ({
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
      d="M5.365 8.656c-.57 0-.856 0-1.09.066a1.75 1.75 0 0 0-1.21 1.21C3 10.165 3 10.45 3 11.021v7.225c0 .57 0 .856.066 1.089a1.75 1.75 0 0 0 1.21 1.21c.233.066.518.066 1.089.066.57 0 .855 0 1.088-.066a1.75 1.75 0 0 0 1.21-1.21c.066-.233.066-.518.066-1.089v-7.225c0-.57 0-.856-.066-1.089a1.75 1.75 0 0 0-1.21-1.21c-.233-.066-.518-.066-1.088-.066M7.729 9.738c1.445-1.87 2.88-3.748 4.337-5.608.462-.59 1.27-.886 1.996-.675 1.62.47 1.206 3.342.783 4.864-.314 1.13.067 1.521.987 1.521 2.01 0 2.965 0 3.65.412a2.88 2.88 0 0 1 1.285 1.678c.418 1.464.274 4.253-.441 6.197-.484 1.314-1.846 2.217-3.027 2.348-1.594.177-3.819.113-5.499.02-1.544-.086-2.981-.773-4.071-1.869"
    />
  </Svg>
);
export default IconlystThumbLikeLight;
