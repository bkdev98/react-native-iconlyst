import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftRotationOutline = ({
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
      d="M4 7.059a.75.75 0 0 1 .75.75v4.09h4.091a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75V7.81a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.62 8.559a7.63 7.63 0 0 0-6.917 4.408.75.75 0 1 1-1.36-.633A9.13 9.13 0 0 1 11.62 7.06c5.04 0 9.13 4.09 9.13 9.13a.75.75 0 1 1-1.5 0 7.633 7.633 0 0 0-7.63-7.63"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftRotationOutline;
