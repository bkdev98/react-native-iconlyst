import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M13.294 15.733h-2.598a.545.545 0 0 0-.53.534v5.486h3.667v-5.49a.537.537 0 0 0-.539-.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.15 7.756-5.92-4.72a3.58 3.58 0 0 0-4.487.002L3.868 7.751A2.92 2.92 0 0 0 2.7 10.063v7.842a3.84 3.84 0 0 0 1.145 2.731 3.82 3.82 0 0 0 2.707 1.117h2.113v-5.49a2.054 2.054 0 0 1 2.02-2.03h2.609a2.04 2.04 0 0 1 2.039 2.027v5.493h2.106a3.865 3.865 0 0 0 3.86-3.836V10.04a2.93 2.93 0 0 0-1.15-2.284"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeBold;
