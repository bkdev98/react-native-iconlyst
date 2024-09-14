import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHashtagBroken = ({
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
      d="M21.25 12V8.026C21.25 5.081 19.415 3 16.467 3H8.032C5.092 3 3.25 5.081 3.25 8.026v7.948C3.25 18.919 5.084 21 8.032 21h8.434c2.949 0 4.784-2.081 4.784-5.026v-.353M9.848 15.854l.976-7.71m2.878 7.71.977-7.71m1.647 1.957H8.51m7.48 3.797H8.176"
    />
  </Svg>
);
export default IconlystHashtagBroken;
