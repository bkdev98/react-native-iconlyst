import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBatteryBroken = ({
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
      d="M11.999 20.15H6.587C4.376 20.15 3 18.59 3 16.38v-5.963c0-2.209 1.383-3.77 3.587-3.77h10.825c2.211 0 3.588 1.561 3.588 3.77v5.962c0 2.21-1.377 3.771-3.59 3.771h-1.95M8.403 13.41v1.799m0-1.799v-1.799m0 1.799h1.8m-1.8 0h-1.8M13.799 13.408h3.597"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.363 6.648v-1.4a1.4 1.4 0 0 0-2.799 0v1.4M17.435 6.648v-1.4a1.4 1.4 0 0 0-2.798 0v1.4"
    />
  </Svg>
);
export default IconlystBatteryBroken;
