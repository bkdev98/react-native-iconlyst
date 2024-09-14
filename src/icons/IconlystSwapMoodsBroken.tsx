import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapMoodsBroken = ({
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
      d="M10.863 15.58a5.195 5.195 0 0 0 9.193 3.309M16.06 10.383a5.195 5.195 0 0 1 5.19 5.198M8.447 3.23a5.196 5.196 0 1 1-3.658 1.506M7.007 6.863v-.058m2.934 0v.058"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.99 9.553a1.78 1.78 0 0 0 1.458.725 1.78 1.78 0 0 0 1.459-.725M14.618 14.009v-.048m2.934.044v-.04M14.6 17.424a1.78 1.78 0 0 1 1.46-.725 1.78 1.78 0 0 1 1.457.725M5.076 16.275a2.92 2.92 0 0 0 2.92 2.92M19.426 7.724a2.92 2.92 0 0 0-2.92-2.92"
    />
  </Svg>
);
export default IconlystSwapMoodsBroken;
