import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDataSetLight = ({
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
      d="M10.82 3.264a2.77 2.77 0 0 1 2.36 0l5.874 2.775a1.282 1.282 0 0 1 .044 2.317l-5.83 3.015c-.792.41-1.744.41-2.537 0L4.902 8.356a1.282 1.282 0 0 1 .044-2.317z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.709 9.592 2.345 1.108a1.282 1.282 0 0 1 .044 2.317l-5.83 3.015c-.792.41-1.744.41-2.537 0l-5.829-3.015a1.282 1.282 0 0 1 .044-2.317l2.345-1.108"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.709 14.252 2.345 1.108a1.282 1.282 0 0 1 .044 2.317l-5.83 3.015a2.77 2.77 0 0 1-2.537 0l-5.829-3.015a1.282 1.282 0 0 1 .044-2.317l2.345-1.108"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.786 7.887 1.508.79V20.68"
    />
    <Ellipse
      cx={10.801}
      cy={7.042}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={1.625}
      ry={1.077}
    />
  </Svg>
);
export default IconlystDataSetLight;
