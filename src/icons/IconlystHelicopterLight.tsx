import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHelicopterLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.384 17.316v2.748m4.65-2.748v2.748M6.11 11.953s2.83 1.214 3.363 1.947c.667.916 1.083 3.498 4.165 3.414 2.465-.066 3.942-.028 4.372 0 5.366 0 .807-7.659-3.536-7.659h-1.19a3 3 0 0 0-1.708.533l-1.33.922H6.49M10.536 20.064h8.569a2.225 2.225 0 0 0 2.145-1.633M7.617 6.86h11.91M13.572 5.705V6.86"
    />
    <Circle
      cx={4.873}
      cy={10.912}
      r={1.623}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.463 9.788v3.102a2 2 0 0 0 2 2h3.905"
    />
  </Svg>
);
export default IconlystHelicopterLight;
