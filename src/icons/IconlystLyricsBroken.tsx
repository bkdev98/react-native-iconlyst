import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLyricsBroken = ({
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
      d="M12.25 3H8.031C5.092 3 3.25 5.081 3.25 8.026v7.948C3.25 18.919 5.084 21 8.032 21h8.434c2.949 0 4.784-2.081 4.784-5.026V8.026C21.25 5.081 19.415 3 16.467 3h-.455M7.6 16.378h1.31M16.899 16.377h-5.29M16.898 12.654h-2.346M11.843 12.654H7.658"
    />
  </Svg>
);
export default IconlystLyricsBroken;
