import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightRotationOutline = ({
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
      d="M20 7.059a.75.75 0 0 1 .75.75v4.84a.75.75 0 0 1-.75.75h-4.842a.75.75 0 0 1 0-1.5h4.091V7.81a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.25 16.189c0-5.04 4.09-9.13 9.13-9.13a9.13 9.13 0 0 1 8.277 5.275.75.75 0 0 1-1.36.633A7.63 7.63 0 0 0 12.38 8.56a7.633 7.633 0 0 0-7.63 7.63.75.75 0 0 1-1.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightRotationOutline;
