import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCupTwoTone = ({
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
      d="M6.702 3.887h12.109s0 10.753-6.051 10.753S6.702 3.887 6.702 3.887M8.691 20.115V17.34h8.117v2.775m1.618 0H7.073"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.333 14.45s.094 2.103-1.07 2.888M14.168 14.45s-.095 2.103 1.07 2.888"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.794 5.652H3.76s-.308 3.802 2.499 5.65c0 0 1.249.901 2.52 1.037M18.706 5.652h3.033s.309 3.802-2.498 5.65c0 0-1.25.901-2.52 1.037M10.265 3.887s-.797 3.505 1.174 7.259"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCupTwoTone;
