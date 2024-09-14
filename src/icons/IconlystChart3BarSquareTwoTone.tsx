import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChart3BarSquareTwoTone = ({
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
      d="M8.283 3.118h8.435c2.948 0 4.782 2.081 4.782 5.028v7.946c0 2.946-1.834 5.026-4.783 5.026H8.283c-2.948 0-4.783-2.08-4.783-5.026V8.146c0-2.947 1.844-5.028 4.783-5.028"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.334 9.323v6.82m4.2-3.41v3.41m4.131-8.052v8.052"
    />
  </Svg>
);
export default IconlystChart3BarSquareTwoTone;
