import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBatteryTwoTone = ({
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
      d="M7.087 6.646h10.825c2.211 0 3.588 1.562 3.588 3.77v5.963c0 2.21-1.377 3.771-3.59 3.771H7.088c-2.211 0-3.587-1.561-3.587-3.77v-5.963c0-2.209 1.383-3.77 3.587-3.77"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.903 13.41v1.799m0-1.799v-1.799m0 1.799h1.8m-1.8 0h-1.8M14.299 13.408h3.597"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.863 6.648v-1.4a1.4 1.4 0 0 0-2.799 0v1.4M17.935 6.648v-1.4a1.4 1.4 0 0 0-2.798 0v1.4"
    />
  </Svg>
);
export default IconlystBatteryTwoTone;
